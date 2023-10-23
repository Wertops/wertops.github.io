import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

//Formats the title and description of each experience
function ExperienceText({title, description}){
  return(
    <>
      <section className={utilStyles.headingMd}>
        <h1>{title}</h1>
      </section>
      <section className={utilStyles.text}>
        <p>{description}</p>
      </section>
    </>
  )
}

//generates relative path for image and makes new NextJS image component with the image found
//at that path
function ExperienceImage({image_path}){
  const images = require.context('../public/images', true);
  return(
    <Image
            priority
            src={images(`./${image_path}.png`)}
            className="img-responsive position-relative start-0" 
            fill={true}
            style={{ objectFit: "cover" }}
            alt=""
          />
  )
}

//Creates new ExperienceImage and ExperienceDescription components.
//Then formats them into a new grid row and returns. 
//If pic_left is true, the picture is returned in the left column and the text is in the right. 
//If pic_left is false, the picture is in the right column
function Experience({image_path, title, description, pic_left}){
  return(
    <>
      <div className="container-flex">
        <div className="row my-5">
        <div className = "col">
          {pic_left ? 
            <ExperienceImage image_path={image_path}></ExperienceImage> 
            : <ExperienceText title={title} description={description}></ExperienceText> }
          </div>
          <div className = "col">
          {pic_left ?
          <ExperienceText title={title} description={description}></ExperienceText>
            : <ExperienceImage image_path={image_path}></ExperienceImage>  }
          </div>
        </div>
      </div>
    </>
  )

}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>Hi! My name is Ella, and I just graduated with my degree in Computer Science from UNC Chapel Hill! I also minored in environmental science. I am looking for a job related to sustainability. Please reach out if you are interested in hiring me!</p>
       <p>
          <Link href="/posts/contactme">Click Here to Contact Me!</Link>
  </p>

      </section>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.heading2Xl}>My Experience</h1>
        <div className="container-fluid">
       {/* <Experience image_path={"590class"} title={"Participant in Kris Jordan's Software Engineering Class"} description={"During the Spring semester of 2023, I took the new Software Engineering course at UNC offered by Kris Jordan. Kris Jordan is renowned as an excellent educator who teaches engaging classes at UNC CH. I felt very empowered to learn comp sci during this semester. His class also helped me strengthen my understanding of fundamentals like git and website architecture. At the end of that course, my team had built a fully functional feature on the website of UNC’s new XL lab to reschedule and display special events. I also used the skills I learned in his class to build this website!"} pic_left={true} />*/}
        <Experience image_path={"abc2"} title={"Board Member of ABC2"} description={"ABC2 is a nonprofit who works to empower youth to change their communities. ABC2 started in my home county of Halifax County. I gave a presentation at ABC2’s conference a few years ago about racial and socioeconomic inequity in the solar industry. I also talked about how the expansion of solar could be used to help close those gap in rural areas like Halifax county. After that presentation, they really honored me by asking if I'd join their board. I’ve been a member of their board since 2021."} pic_left={true} />
        <Experience image_path={"Jordan"} title={"Arabic Student in Jordan"} description={"I spent the summer of 2022 in Jordan for an intensive Arabic study abroad program. I wanted to do that program because I studied Arabic in college, and wanted a chance to immerse myself in the language. While there, I made a lot of friends and developed a love for Jordan's culture."} pic_left={false} />
        <Experience image_path={"c4eebuilding"} title={"Intern at C4EE"} description={"The Center for Energy Education (C4EE) is a nonprofit whose goal is to make the solar industry better work for the communities that host solar farms. They train people to become solar installers and run education programs on solar energy. I was the first intern at C4EE back in 2018. I regularly updated the social media pages, compiled a list of over 300 people to invite to C4EE’s grand opening, and helped run C4EE’s original summer camps and teacher trainings. I came back as an intern in the summer of 2020. I have maintained a relationship with C4EE through the years, and occasionally help with their programs."} pic_left={true} /> 
        <Experience image_path={"NREL Logo"} title={"Cybersecurity Research Intern at NREL"} description={"I was honored to be selected for the Science Undergraduate Laboratory Internship at the National Renewable Energy Lab. I was selected to work on the team developing a model to test the cybersecurity of energy grids. Sadly, Covid hit right before I was supposed to start my internship. Thus, I had to complete this internship remotely. While I didn’t have the experience I expected, it was exciting to learn about the awesome work that goes on at this national lab. I also got to learn about smart grids and energy grid cybersecurity."} pic_left={false}/>
        <Experience image_path={"climateprotest"} title={"Climate Change Activist at UNC"} description={"I’ve cared deeply about climate change and how it stands to impact the world since my Mom took me to watch the Inconvenient Truth when I was a kid. I vowed to myself in the 5th grade that I must figure out a way to stop climate change by 2016. Obviously, I wasn’t successful in that goal. By my sophomore year of college, however, I was increasingly disillusioned with the mainstream routes of advocacy championed as ways to combat climate change like calling elected officials, recycling, and composting. I joined the Sunrise Movement, a youth climate advocacy group, to try and fight for more rapid climate action. I also started sitting outside UNC’s administrative building in a climate change protest every Friday to demand UNC create a time bound sustainability plan. Once Covid hit, I moved to Warren County, NC. I helped start and run a Sunrise Movement Chapter there." } pic_left={true}/>
        <Experience image_path={"Steelcasephoto"} title={"Software Engineering Intern at Steelcase"} description={"During the summer of 2018-2019, I had my first ever software engineering internship at Steelcase. Steelcase creates supportive and beautiful offices and office furniture. I worked on Steelcase’s legacy code, most of which was written in ABAP. Learning ABAP was particularly challenging because most of the variable names were abbreviated German, and many of the functions that I needed to be familiar with were Steelcase specific. Thus, there was no online documentation. I did manage to develop a new version of one of their apps to replace an older version by the end of my internship."} pic_left={false} />

        </div>
      </section>
    </Layout>
  );
}
