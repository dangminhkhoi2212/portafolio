import { githubService } from "@/services/github"
import { useQuery, type UseQueryOptions } from "@tanstack/react-query"
export const getRepoOptions = ({
  repo = "portfolio",
  options,
}: {
  repo?: string
  options?: UseQueryOptions<Awaited<ReturnType<typeof githubService.getRepo>>>
}) => ({
  queryKey: ["repo", repo],
  queryFn: () => githubService.getRepo({ repo }),
})

export const useGetRepo = ({
  repo,
  options,
}: {
  repo?: string
  options?: UseQueryOptions<Awaited<ReturnType<typeof githubService.getRepo>>>
}) => {
  return useQuery(getRepoOptions({ repo, options }))
}
