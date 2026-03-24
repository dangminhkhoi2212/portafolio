import axios from "axios"
import { RepoType } from "./type"
const base = process.env.NEXT_PUBLIC_GITHUB_API!
const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER!
export async function getRepo({
  repo = owner,
}: {
  repo?: string
}): Promise<RepoType> {
  const res = await axios.get(`${base}/repos/${owner}/${repo}`)
  return res.data
}
export const githubService = {
  getRepo,
}
