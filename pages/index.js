import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { useState } from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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

function ExperienceImage({image_path}){
  const images = require.context('../public/images', true);
  return(
    <Image
            priority
            //TODO: change to image path later
            //src="/images/profile.jpg"
            src={images(`./${image_path}.png`)}
            className="img-responsive position-relative start-0"  //right now, the dimensions in border rectangle clash with what's below. Fix later
            //height={144}
            //width={144}
            fill={true}
            style={{ objectFit: "cover" }}
            //style={{objectFit:"cover"}}
            alt=""
          />
  )
}
//I'll start by making all of this as one component, them possibly make seperate components for
function Experience({image_path, title, description, pic_left}){
  //const images = require.context('../public/images', true);
  //images(`./${image_path}.png`)
  /*if(pic_left){
    console.log("I got here 2!");*/
  
  return(
    <>
      <div class="container-flex">
        <div class="row my-5">
        <div class = "col">
          {pic_left ? 
            <ExperienceImage image_path={image_path}></ExperienceImage> 
            : <ExperienceText title={title} description={description}></ExperienceText> }
          </div>
          <div class = "col">
          {pic_left ?
          <ExperienceText title={title} description={description}></ExperienceText>
            : <ExperienceImage image_path={image_path}></ExperienceImage>  }
          </div>
        </div>
      </div>
    </>
  )
 /* }
  else{
    console.log("I got here 2!");
    return(
      <>
        <div class="container-flex">
          <div class="row my-5">
            <div class = "col">
              <ExperienceText title={title} description={description}></ExperienceText> 
            </div>
            <div class = "col">
              <Image
              priority
              //TODO: change to image path later
              //src="/images/profile.jpg"
              src={images(`./${image_path}.png`)}
              className="img-responsive position-relative start-0"  //right now, the dimensions in border rectangle clash with what's below. Fix later
              //height={144}
              //width={144}
              fill={true}
              style={{ objectFit: "cover" }}
              //style={{objectFit:"cover"}}
              alt=""
            />
            </div>
          </div>
        </div>
      </>
    )
  }*/

  


}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <section className={utilStyles.headingMd}>
        <p>Hi! My name is Ella, and I just graduated with my degree in Computer Science from UNC Chapel Hill! I also minored in environmental science. I am looking for a job related to sustainability. Please reach out to me at jackrusselruby@gmail.com if you are interested in hiring me.</p>
        <p>
          <Link href="/posts/contactme">Click Here to Contact Me!</Link>
  </p>

      {/*Contact Me*/}
      {/*<h1 class="display-5 text-center">Want to talk to me?</h1>
      <h2 class="text-center">Please Reach Out!</h2>
      <div class="row mt-2">
      <p class = "text-center"><strong>Email:</strong> jackrusselruby(at)gmail.com</p>
      </div>
      <div class="row">
      <p class = "text-center"><strong>Text:</strong> (252) 678-0854</p>
      </div>*/}

      </section>
       {/* Add this <section> tag below the existing <section> tag */}
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.heading2Xl}>My Experience</h1>
        <div class="container-fluid">
       {/* <Experience image_path={"590class"} title={"Participant in Kris Jordan's Software Engineering Class"} description={"During the Spring semester of 2023, I took the new Software Engineering course at UNC offered by Kris Jordan. Kris Jordan is renowned as an excellent educator who teaches engaging classes at UNC CH. I felt very empowered to learn comp sci during this semester. His class also helped me strengthen my understanding of fundamentals like git and website architecture. At the end of that course, my team had built a fully functional feature on the website of UNC’s new XL lab to reschedule and display special events. I also used the skills I learned in his class to build this website!"} pic_left={true} />*/}
        <Experience image_path={"abc2"} title={"Board Member of ABC2"} description={"ABC2 is a nonprofit who works to empower youth to change their communities. ABC2 started in my home county of Halifax County. I gave a presentation at ABC2’s conference a few years ago about racial inequity in the solar industry, and how the expansion of solar could be an opportunity to help close that gap in rural areas like Halifax county. After that presentation, they really honored me by asking if I’d be a member of their board to help inform and guide the climate work they were getting into. I joined their board in 2021. I wasn’t able to be active on the board for a while because I was struggling with a lot of mental health issues during my last two years of college. Now that I am functioning well again and have graduated, I am active on the board again."} pic_left={true} />
        <Experience image_path={"c4eebuilding"} title={"Intern at C4EE"} description={"The Center for Energy Education (C4EE) is a nonprofit whose goal is to make the solar industry better work for the communities that host solar farms. They train people to become solar installers and run education programs for local people on solar energy. I was the first intern at C4EE back in 2018. I regularly updated the social media pages, compiled a list of over 300 people to invite to C4EE’s grand opening, and helped run C4EE’s original summer camps and teacher trainings. I came back as an intern in the summer of 2020. I also have maintained a relationship with C4EE through the years, and have occasionally helped with their programs as recently as 2023. "} pic_left={false} /> 
        <Experience image_path={"NREL Logo"} title={"Cybersecurity Research Intern at NREL"} description={"I was honored to be selected or the Science Undergraduate Laboratory Internship at the National Renewable Energy Lab. I was selected to work on the team developing a model to test the cybersecurity of energy grids. Sadly, Covid hit right before I was supposed to start my internship, so I had to complete this internship remotely. While I didn’t have the experience I’d expected, it was exciting to learn about the awesome work that goes on at this national lab, and learn a bit about energy grid cybersecurity in the process."} pic_left={true}/>
        <Experience image_path={"climateprotest"} title={"Climate Change Activist at UNC"} description={"I’ve cared deeply about climate change and how it stands to impact the world since my Mom took me to watch the inconvenient truth when I was a kid. I vowed to myself in the 5th grade that I must figure out a way to stop climate change by 2016. Obviously, I wasn’t succesful in that goal. By my sophomore year of college, however, I was increasingly disillusioned with the more mainstream routes of advocacy championed as ways to combat climate change like by calling elected officials, recycling, and composting. I joined the Sunrise Movement, a youth climate advocacy group, to try and fight for more rapid climate action. I also started sitting outside UNC’s administrative building in a climate change protest every Friday to demand UNC create a time bound sustainability plan. Once Covid hit, I moved to Warren County, NC. I helped start and run a Sunrise Movement Chapter there. "} pic_left={false}/>
        <Experience image_path={"Steelcasephoto"} title={"Software Engineering Intern at Steelcase"} description={"During the summer of 2018-2019, I had my first ever software engineering internship at Steelcase. Steelcase creates supportive and beautiful offices and office furniture. I worked on Steelcase’s legacy code, most of which was written in ABAP. Learning ABAP was particularly challenging because most of the variable names were not readable, and many of the functions that I needed to be familiar with were Steelcase specific. Thus, there was no online documentation.  I did manage to develop a new version of one of their apps to replace an older version by the end of my internship. "} pic_left={true} />


        </div>
      </section>
     {/*<h1 class="display-5 text-center">Want to talk to me?</h1>
      <h2 class="text-center">Please Reach Out!</h2>
      <div class="row mt-4">
      <p class = "text-center"><strong>Email:</strong> jackrusselruby(at)gmail.com</p>
      </div>
      <div class="row">
      <p class = "text-center"><strong>Text:</strong> (252) 678-0854</p>
      </div>*/}
    </Layout>
  );
}
