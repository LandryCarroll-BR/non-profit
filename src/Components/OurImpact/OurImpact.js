import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import './OurImpact.css';
import HeaderImage from '../PageHeader/images/ourimpact.jpg'
import SideBar from '../SideBar/SideBar';


function OurImpact() {
  return (
    <section className="ourImpact">
      <PageHeader image={HeaderImage} title="Our Impact" subTitle="Helping Others To Achieve Thier Goals" />

      <div className="ourImpact__main">
        <SideBar
          title="Our Work"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo impedit suscipit cumque accusantium tenetur, quo ratione debitis veritatis magni, hic at quaerat! Praesentium consectetur similique nobis recusandae non reiciendis?"
          list={[
            "Develop a Sustainable Business",
            "Improve Educational and Professional Training",
            "Support Micro Enterprise",
            "Scale high impact business organizations",
            "Implement our business strategy"]}
          info="For more information on what we believe go "
          link="/about" />

        <article className="ourImpact__article">
          <h2>Why Our Business?</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto praesentium dolorum repellendus odio commodi maxime ipsa eum molestiae odit et ad sapiente officia, hic consequatur quam porro dignissimos distinctio nesciunt nobis fuga assumenda! Dolore magnam doloremque laudantium ab quod, ad deserunt enim temporibus, minima nostrum maxime veritatis nihil illum quis provident architecto molestiae, quo pariatur tenetur quidem harum culpa ex veniam. Quia, voluptate? Rem placeat dolor facilis aspernatur pariatur quaerat expedita sint magnam dignissimos, illo nesciunt laborum eos tempore, nostrum odit. Reiciendis, veritatis ullam suscipit dolorem nobis laudantium harum distinctio placeat. Dicta, quis minima. Nostrum sit a consequatur ut quibusdam.</p>
        </article>
      </div>
    </section>
  )
}

export default OurImpact
