
function AboutPage() {
    return (
      <div className="about-page">
        <h1 className="about-title">About us</h1>
        <h5 className="mission">We've got a simple mission: to eliminate inequalities and discrimination in the tech field. We find and curate the best opportunities for you, so you have the chance to focus on your personal and professional development.</h5>
        
        <div className="about-container">
        <p className="mission-detail">
        <p>Women in computing were among the first programmers in the early 20th century and contributed substantially to the industry. 
        As technology and practices have evolved, the role of women as programmers has changed and history has downplayed their achievements.</p>
        <p>The first algorithm to be executed by a computer was designed by Ada Lovelace, who was a pioneer in the field. 
        Throughout the 19th and early 20th century, and up to the Second World War, programming was predominantly carried out by women; 
        notable examples are the computers at Harvard, code breaking at Bletchley Park and engineering at NASA.
        After the 1960s, the 'soft work' that had been dominated by women evolved into modern software and the importance of women declined. 
        Today, gender inequality and the lack of women in IT is an established fact.</p>
        <p>Adacodes is a platform for sharing resources, providing the tools to expand knowledge and networking. 
        Our list of opportunities and events in the area is constantly updated thanks to your valuable contributions.</p>
        <p>Following the spirit of Ada Lovelace, we advocate for more diversity in the technology world.</p> 
        </p>
        <div>
          <img className="about-pic" src="https://64.media.tumblr.com/2ac0a963a21ddfaacbb30210f336522e/1c254e4721b2abb1-c8/s1280x1920/0b8bcd6bdf8ef05009f660bfc1bf1b38fda87013.jpg" alt="first-programmer" width="400px" />
        </div>
        </div>

      </div>
    );
  }
   
  export default AboutPage;