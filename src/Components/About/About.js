import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import './About.css';
import HeaderImage from '../PageHeader/images/about.jpg';
import SideBar from '../SideBar/SideBar';
import Image1 from './images/youngperson.jpg';

function About() {
  return (
    <section className="about">
      <PageHeader image={HeaderImage} title="About" subTitle="Working To Create a Better Tomorrow" />

      <div className="about__main">
        <SideBar
          title="Our Work"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo impedit suscipit cumque accusantium tenetur, quo ratione debitis veritatis magni, hic at quaerat! Praesentium consectetur similique nobis recusandae non reiciendis?"
          list={[
            "Develop a Sustainable Success",
            "Improve Educational and Professional Training",
            "Support Micro Enterprise",
            "Scale high impact organizations",
            "Implement Sustainable Programs"]}
          info="For more information on how we plan to make an impact across the globe go "
          link="/ourImpact" />

        <article className="about__article">
          <img src={Image1} alt="young person" />
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo impedit suscipit cumque accusantium tenetur, quo ratione debitis veritatis magni, hic at quaerat! Praesentium consectetur similique nobis recusandae non reiciendis?<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, est sapiente sit deleniti natus voluptatem, expedita perferendis explicabo provident praesentium vel dignissimos saepe eius minus molestias, accusamus odio! Quasi aliquid doloribus recusandae, ab ducimus sunt consectetur accusamus impedit corrupti culpa! Eum deleniti sapiente dolorum voluptates amet expedita porro ad laborum ullam, dolor iusto tempore natus, adipisci, maxime ea esse aut error dolorem distinctio pariatur libero. Excepturi praesentium vel sint eligendi perferendis odio dolor ratione porro ullam nulla ea doloribus consequuntur, atque laudantium nobis! Vero consequuntur corporis officiis asperiores. Veniam quae dolores a sint necessitatibus amet. Dolores quo nam a nulla?</p>
        </article>
      </div>
      <div className="about__bumper"></div>

      <div className="about__main">
        <SideBar
          title="Founder John Smith's Statement"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo impedit suscipit cumque accusantium tenetur, quo ratione debitis veritatis magni, hic at quaerat! Praesentium consectetur similique nobis recusandae non reiciendis?"
          list={[
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet optio. Unde, nobis doloremque.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet optio.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis doloremque.",
            "SLorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet optio. Unde, nobis doloremque."]}
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo impedit suscipit cumque accusantium tenetur, quo ratione debitis veritatis magni, hic at quaerat! Praesentium consectetur similique nobis recusandae non reiciendis?"
          link="/ourImpact" />

        <article className="about__article">
          <h2>What We Believe In</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex minima veniam corporis obcaecati, officia quasi illo, nobis culpa ipsam, sed quod. Error quaerat, nam expedita esse quam consequuntur perspiciatis aut veritatis officia sequi eveniet ut praesentium iusto nihil molestiae ratione aliquam quidem ab saepe sit harum. Commodi ad, facilis soluta minima numquam veniam sequi obcaecati error accusantium molestias tempore aliquid nesciunt, nulla maxime non pariatur quo. Quae esse aliquid, sed incidunt corporis eum repellendus fugiat odio aut minus neque, pariatur itaque vitae, molestiae labore praesentium tempora veritatis? Sit magni labore consequuntur officiis amet necessitatibus laudantium officia aliquid ab delectus. <br /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolor consequatur itaque porro qui eaque explicabo autem non reiciendis sapiente distinctio, consequuntur laudantium amet dolores, perspiciatis iusto totam quibusdam. Quis modi natus saepe corrupti, distinctio harum quisquam doloremque rerum commodi exercitationem minus minima corporis ratione reprehenderit soluta, eaque id blanditiis pariatur eum ex laborum architecto. Sunt minus, laudantium sed fugiat animi ipsum iusto deleniti. Necessitatibus consectetur maxime recusandae quaerat dolore illo minus odit temporibus voluptatibus in, illum quisquam. Culpa ratione architecto dicta minus dolore quibusdam iusto optio consequuntur quae, pariatur earum! Animi et nulla veniam facere quaerat quos ex sit eligendi reiciendis deserunt deleniti quisquam dolore, assumenda distinctio non quo!</p>
        </article>
      </div>
    </section>
  )
}

export default About
