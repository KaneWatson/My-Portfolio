import { Link } from "react-router-dom"
import { formatName } from "../utils/helpers"

function PortfolioItem({ project, projectIndex }) {
  const { name, homepage: website, html_url: repoUrl, description, topics, id } = project

  const tags = topics.length ? topics?.filter(topic => topic !== "react-datepicker" && topic !== "single-page-app") : topics

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-10">
      <div className="md:basis-1/2 w-[21rem] h-[14rem] sm:w-[28rem] sm:h-[19rem] md:h-96 xl:h-[26rem] max-h-[30rem] max-w-[40rem] rounded-lg md:rounded-md shadow-xl shadow-gray-400">
        <img src={`/imgs/projects/${name}.webp`} alt={name} className="contrast-[0.9] object-cover object-top w-full h-full rounded-lg md:rounded-md" loading={projectIndex === 0 ? "eager" : "lazy"} />
      </div>
      <div className="flex flex-col gap-4 md:basis-1/2">
        <h1 className="text-xl text-center md:text-start md:text-2xl font-semibold">{formatName(name)}</h1>
        {description ? <p className="md:text-xl text-justify">{description}</p> : <p>No description yet.</p>}
        {tags.length > 0 && (
          <div className="flex gap-1 flex-wrap justify-center">
            {tags.map(tag => (
              <span className="bg-gradient-to-tr from-[#271334] to-[#400a7e] text-gray-100 px-2 py-1 rounded-lg font-semibold text-xs md:text-sm" key={`${name}-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-4 justify-center items-center mt-3 text-sm md:text-base font-bold">
          {id !== 768374700 ? (
            <Link className="bg-[#4f46e5] shadow-md hover:bg-[#6159f7] transition duration-300 text-gray-100 w-28 md:w-32 py-2 rounded-xl text-center" to={website} target="_blank" rel="noopener noreferrer">
              View App
            </Link>
          ) : (
            <button className="bg-[#4f46e5] shadow-md text-gray-400 w-28 md:w-32 py-2 rounded-xl text-center disabled:cursor-not-allowed" disabled={true}>
              View App
            </button>
          )}
          <Link className="bg-[#4f46e5] shadow-md hover:bg-[#6159f7] transition duration-300 text-gray-100 w-28 md:w-32 py-2 rounded-xl text-center" to={repoUrl} target="_blank" rel="noopener noreferrer">
            Github Repo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
