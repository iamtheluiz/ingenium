import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const coursesDirectory = join(process.cwd(), 'engenharias')

export function getCoursesSlugs() {
  return fs.readdirSync(coursesDirectory)
}

export function getCoursesBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(coursesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllCourses(fields = []) {
  const slugs = getCoursesSlugs()
  const courses = slugs
    .map((slug) => getCoursesBySlug(slug, fields))
  return courses;
}