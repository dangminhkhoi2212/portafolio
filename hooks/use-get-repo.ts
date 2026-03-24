import { githubService } from "@/services/github"
import { useQuery, type UseQueryOptions } from "@tanstack/react-query"

export const useGetRepo = ({
  repo,
  options,
}: {
  repo?: string
  options?: UseQueryOptions<Awaited<ReturnType<typeof githubService.getRepo>>>
}) => {
  return useQuery({
    queryKey: ["repo", repo],
    queryFn: () => githubService.getRepo({ repo }),
    ...options,
  })
}
