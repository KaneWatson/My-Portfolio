import PortfolioItem from "./PortfolioItem"
import { useProjects } from "../hooks/useProjects"
import Spinner from "./Spinner"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import Pagination from "./Pagination"
import { Helmet } from "react-helmet-async"

function PortfolioProjects({ isHomePage = false }) {
  const { projects, isLoading, count, featuredProjects } = useProjects()

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))
  const displayProjects = isHomePage ? featuredProjects : projects

  useEffect(
    function () {
      if (!isHomePage) {
        if (count && Math.ceil(count / import.meta.env.VITE_PER_PAGE) < currentPage && currentPage > 1) {
          searchParams.set("page", currentPage - 1)
          setSearchParams(searchParams)
        } else return
      }
    },
    [count, currentPage, searchParams, setSearchParams, isHomePage]
  )

  if (isLoading) return <Spinner />

  return (
    <div>
      {!isHomePage && (
        <Helmet prioritizeSeoTags>
          <meta charSet="utf-8" />
          <title>Web & IT Genius | My Portfolio</title>
          <meta name="description" content="Welcome to my portfolio page! This is a non exhaustive list of some of the projects I had fun building. From simple apps that took a day or an afternoon to build to some pretty complex apps that took a lot of research, time and documentation to build." />
          <link rel="canonical" href="https://webitgenius.com/portfolio" />
        </Helmet>
      )}
      <h1 className="text-3xl font-bold mb-8">{isHomePage ? " Featured Projects" : "Projects"}</h1>

      {!displayProjects.length ? null : (
        <div className="flex flex-col gap-8 mb-8">
          {displayProjects.map(project => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      )}
      {isHomePage ? null : <Pagination count={count} />}
    </div>
  )
}

export default PortfolioProjects
