import styled from "styled-components"

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  justify-content: space-between;
  padding: 2rem 2rem;
  gap: 1rem;
  background-color: #000000;
  border-radius: 10px;
`

const SkillTitle = styled.h1`
  text-align: center;
  font-size: larger;
  font-weight: 700;
`

const SkillSubTitle = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`

const SkillBody = styled.div`
  text-align: center;
`

function Skills() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Skills</h1>
      <div className="flex flex-col md:flex-row gap-6 my-6 text-gray-100">
        <SkillCard className="shadow-xl">
          <SkillTitle>Programming Skills</SkillTitle>
          <SkillSubTitle>Front-end</SkillSubTitle>
          <SkillBody>HTML - CSS - SASS - Javascript - ES6 - React - Typescript - React Native - SPAs (single-page apps)</SkillBody>
          <SkillSubTitle>Back-end</SkillSubTitle>
          <SkillBody>Node.js - Express.js - MongoDB - RESTful APIs - SupabaseJs</SkillBody>
        </SkillCard>
        <SkillCard className="shadow-xl">
          <SkillTitle>Libraries & Dev Tools</SkillTitle>
          <SkillSubTitle>Libraries</SkillSubTitle>
          <SkillBody>Bootstrap - Tailwind CSS - styled-components - Redux - Leaflet - Recharts - tanstack/react-query</SkillBody>
          <SkillSubTitle>Tools</SkillSubTitle>
          <SkillBody>Vite - VSCode - Git - Github - Netlify - Vercel - Render - Postman</SkillBody>
        </SkillCard>
        <SkillCard className="shadow-xl">
          <SkillTitle>Other Skills</SkillTitle>
          <SkillSubTitle>Extras</SkillSubTitle>
          <SkillBody>Search Engine Optimization (SEO) - Shopify - Google Search Console - Responsive Design</SkillBody>
          <SkillSubTitle>Languages I speak</SkillSubTitle>
          <SkillBody>I am trilingual, I speak English, French and Arabic on a daily basis for the past 20 years</SkillBody>
        </SkillCard>
      </div>
    </div>
  )
}

export default Skills
