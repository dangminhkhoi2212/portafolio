"use client"
import { buttonVariants } from "@/components/ui/button"
import { useGetRepo } from "@/hooks/use-get-repo"
import { cn } from "@/lib/utils"
import { GitFork, Github, Star } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Card, CardContent, CardTitle } from "./ui/card"

const GithubRepo: React.FC = () => {
  const { data, isLoading } = useGetRepo({ repo: "portfolio" })

  if (isLoading || !data) {
    return (
      <div className="z-20 flex flex-col items-center gap-2">
        <div className="h-6 w-24 animate-pulse rounded bg-muted/20" />
        <div className="h-4 w-32 animate-pulse rounded bg-muted/20" />
      </div>
    )
  }

  return (
    <>
      <Card className="w-fit p-0">
        <CardContent className="flex flex-row items-center gap-2 p-0">
          <CardTitle className="flex flex-row items-center gap-2 px-4 backdrop-blur">
            <h3 className="text-sm font-semibold text-muted-foreground">
              {data.name}
            </h3>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span>{data.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitFork className="h-4 w-4" />
              <span>{data.forks_count}</span>
            </div>
          </CardTitle>

          <Link
            href={data.html_url}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "gap-2 px-5 text-xs font-semibold transition-all hover:scale-105 active:scale-95 md:h-9"
            )}
          >
            <Github className="h-2 w-2" />
            Give me a star
          </Link>
        </CardContent>
      </Card>
    </>
  )
}

export default GithubRepo
