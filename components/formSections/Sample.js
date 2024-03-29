import res from '../../styles/Resume.module.scss'


function Sample() {
    let yourName = 'Osbaldo'
  return (
    <div className={res.resume}>
          <div className={res.header}>
            <div className={res.headerL}>
              <p>(919) 798-4119 📞</p>
              <p>
              osbaldo@codethedream.org 📧
              </p>
              <p>osbaldoaguilar.dev 🕸️</p>
            </div>
            <div>
              <div className={res.headerR}>
                <h3>{yourName}</h3>
              </div>
            </div>
          </div>
          <div className={res.body}>
            <h4 className={res.bodyTitle}>
              Summary
            </h4>
            <p>
            Tech savvy Web Developer with close to 3 years in web development. Confident in developing on a variety of platforms and mobile systems. Work well within team environments. Flexible hard worker ready to learn and contribute to team success.
            </p>
            <div />
            <h4>EXPERIENCE</h4>
            <p>Front end web and mobile development using React, vanilla Javascript, WordPress and Shopify where I have exercised my CSS and HTML skills as well a peek to CMS to create various types of projects including Dream Statement, a next js app that came from code I developed and along with another team member we programed it under a month. Tasks for Dream Statement included wire-framing and developing code as more details were revealed. I was in charge of creating a multi step form that stores all the data in the global state and rendering out the statement. I also have been in a 4 person team where we have developed 5 WordPress sites. My duties were content-wrangler, content-layout and HTML/CSS changes/features using SFTP to add changes. Another project I have worked on is a restaurant react app where you add the type of fish by filling out a modal and it adds to your menu and from your menu you can add the type or quantity of that fish to your order. Using functions your order then adds the total and formats it using dollars. Currently this resume was created by an app I developed.</p>
            <div />
            <h4>Skills</h4>
            <ul>
              <li>&nbsp;--&nbsp;HTML&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;JavaScript&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;React.js&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;Next.js&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;CSS&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;Sass&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;Styled Componenets&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;Web Development&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;WordPress&nbsp;--&nbsp;</li>
              <li>&nbsp;--&nbsp;Shopify&nbsp;--&nbsp;</li>
            </ul>
            <div/>
            <h4>Licenses & Certifications</h4>
              <p>
              <a href='/'>Emerging Leaders Certification - Truist Leadership Institute</a>

              </p>
              <a href='/'>React For Beginners - Bostype Inc</a>
          </div>
        </div>
  )
}

export default Sample