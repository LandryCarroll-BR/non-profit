import React from 'react';
import Hero from '../Hero/Hero';
import './Home.css';
import { Link } from 'react-router-dom';
import ContactPageBottom from '../ContactPageBottom/ContactPageBottom';

function Home() {
  return (
    <main className="home">
      <Hero />
      <section className="home__banner">
        <h2>We want to do more than non-profit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa optio magnam recusandae dicta molestias in. Delectus quibusdam cum tempore nulla aliquam, nemo laboriosam consequuntur repudiandae numquam. Tenetur, explicabo magni?</p>
      </section>
      <section className="home__info">
        <div className="home__features">
          <div className="home__column">
            <svg xmlns="http://www.w3.org/2000/svg" width="501.996" height="500.48" viewBox="0 0 501.996 500.48">
              <path id="Path_9" data-name="Path 9" d="M899.69,287.163a45.272,45.272,0,0,0-59.29-24.47l-1.77.74-3.25,1.35-2.37-2.61c-1.64-1.8-3.41-3.77-5.28-5.86-24.27-27.06-64.88-72.36-114.69-79.02l-4.33-.58V86.223l4.57-.39a152.891,152.891,0,0,0,99.34-48.86,152.7,152.7,0,0,0,40.61-103.8h0a11.28,11.28,0,0,0-11.28-11.28h0a152.462,152.462,0,0,0-96.18,34.02,154.13,154.13,0,0,0-53.24,85.15l-2.6,11.42-6.45-9.78a153.018,153.018,0,0,0-128.01-69.11h0a11.28,11.28,0,0,0-11.28,11.28h0a152.685,152.685,0,0,0,40.61,103.8,152.8,152.8,0,0,0,99.34,48.86l4.57.39v38.17l-4.78.22a193.664,193.664,0,0,0-105.45,37.43l-1.72,1.3-2.14-.37a86.738,86.738,0,0,0-48.24,5.44l-29.75,12.37-6.92,2.87V211.131a10,10,0,0,0-10-10H411.188a10,10,0,0,0-10,10V382.416a10,10,0,0,0,10,10h68.525a10,10,0,0,0,10-10V354.443l6.87,2.77,145.35,58.71a87.992,87.992,0,0,0,67.01-.36l166.28-69.11a45.358,45.358,0,0,0,24.47-59.29Zm-429.98,85.25H421.19V221.123h48.52ZM716.96,28.983a133.653,133.653,0,0,1,42.37-58.31,132.662,132.662,0,0,1,67.52-27.93l6.24-.71-.71,6.24A133.6,133.6,0,0,1,741.44,59.8l-18.97,6.23L736.26,51.6,784.313,1.338A10,10,0,0,0,784-12.8h0a10,10,0,0,0-14.137.316l-44.6,46.652-16.7,17.46Zm-44.8,56.89-44.6-46.654a10,10,0,0,0-14.134-.319l-.005,0a10,10,0,0,0-.319,14.136L661.15,103.3l13.8,14.43-18.97-6.23A133.621,133.621,0,0,1,565.03-.027l-.7-6.24,6.24.71a133.619,133.619,0,0,1,109.89,86.24l8.39,22.65Zm-62.81,131.8a174.366,174.366,0,0,1,83.21-21.56c4.66,0,9.4.2,14.07.59,44,3.66,83.31,47.45,104.43,70.98l4.71,5.25-6.51,2.7L730,308.573l-7.04,2.93.12-7.62a46.154,46.154,0,0,0-28.96-43.46L609.89,226.7l-9.83-3.94Zm271.9,96.57a25.233,25.233,0,0,1-13.71,13.74l-166.28,69.11a68.148,68.148,0,0,1-51.85.29l-156.58-63.25-3.12-1.26v-75.86l3.08-1.28,41.27-17.15a66.916,66.916,0,0,1,50.85-.34l101.78,40.74a26.05,26.05,0,0,1,14.05,34.91,26.222,26.222,0,0,1-7.18,9.36l.15.35-3.84,2.19a25.949,25.949,0,0,1-22.38,1.6l-69.07-27.15-7.32,18.61L660.19,346a45.825,45.825,0,0,0,41.15-3.79l.35-.21.38-.16,146.01-60.69a25.363,25.363,0,0,1,33.17,33.09Z" transform="translate(-401.19 78.107)" />
            </svg>
            <h3>Grow your business</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tempore quis ut veritatis aspernatur minima architecto fugiat aut consequuntur ab, quidem, sint eligendi earum corporis expedita deleniti, voluptatibus reiciendis! Natus?</p>
          </div>
          <div className="home__column">
            <svg xmlns="http://www.w3.org/2000/svg" width="511" height="504.197" viewBox="0 0 511 504.197">
              <g id="Group_8" data-name="Group 8" transform="translate(0 -3.992)">
                <path id="Path_4" data-name="Path 4" d="M508.918,217.933,423.39,106.83a10.019,10.019,0,0,0-13.317-2.339l-55.22,35.119h-72.02a9.906,9.906,0,0,0-2.756.46l-55.84,16.074L166.3,140.3,110,104.491a10.016,10.016,0,0,0-13.174,2.16L2.222,223.828a10.017,10.017,0,0,0,1.263,13.886l49.583,42.671L97.551,340.33a35.38,35.38,0,0,0,22.258,59.431,35.621,35.621,0,0,0-.414,5.415,35.414,35.414,0,0,0,35.411,35.411c.129,0,.254-.008.379-.012,0,.242-.016.48-.016.722a35.407,35.407,0,0,0,35.411,35.411,36.074,36.074,0,0,0,5.528-.433,35.411,35.411,0,0,0,60.261,21.559l5.416-5.415,2.273,1.833a35.394,35.394,0,0,0,60.011-26,35.351,35.351,0,0,0,35.945-35.926,35.382,35.382,0,0,0,35.942-35.961A35.391,35.391,0,0,0,426.2,341.683l32.479-68.023,48.831-42.02A10.017,10.017,0,0,0,508.918,217.933ZM106.791,126.2l40.483,25.743L59.208,259.235l-35.29-30.374ZM112.5,353.679l12.218-12.218c.37-.371.76-.722,1.158-1.049a15.34,15.34,0,0,1,8.347-3.388c.085-.008.175-.008.261-.012.436-.035.873-.058,1.314-.054a15.278,15.278,0,0,1,10.963,4.815c5.66,5.984,5.356,15.762-.679,21.8l-11.848,11.848A15.37,15.37,0,1,1,112.5,353.679Zm31.434,62.362a15.364,15.364,0,0,1,0-21.734l23.692-23.692A15.534,15.534,0,0,1,185.1,367.6a15.318,15.318,0,0,1,8.467,15.871,16.214,16.214,0,0,1-4.577,9.26l-23.317,23.313a15.37,15.37,0,0,1-21.739,0Zm35.774,36.121a15.365,15.365,0,0,1,0-21.735L203.4,406.735A15.542,15.542,0,0,1,221.98,404.3a15.293,15.293,0,0,1,7.337,15.532,16.242,16.242,0,0,1-4.554,9.017L201.45,452.162a15.37,15.37,0,0,1-21.739,0Zm40.748,31.5a15.387,15.387,0,0,1,0-21.735l12.219-12.218c.37-.371.756-.718,1.154-1.045a.353.353,0,0,0,.027-.023,15.316,15.316,0,0,1,6.815-3.166l.175-.023c.429-.078.866-.141,1.3-.18.176-.015.351-.015.53-.027.359-.02.714-.043,1.076-.039a15.267,15.267,0,0,1,10.963,4.815,14.038,14.038,0,0,1,.991,1.165,15.864,15.864,0,0,1-1.731,20.694l-11.786,11.786A15.387,15.387,0,0,1,220.459,483.663Zm186.92-111.824a15.383,15.383,0,0,1-21.735,0c-.219-.219-.449-.421-.682-.612L320.533,306.12a10.021,10.021,0,0,0-14.246,14.1l65.127,65.8.023.023A15.371,15.371,0,1,1,349.7,407.784l-43.568-44.019a10.019,10.019,0,1,0-14.241,14.1l42.9,43.345a9.608,9.608,0,0,0,.7.784,15.371,15.371,0,1,1-21.743,21.734L289.972,419.7a10.02,10.02,0,1,0-14.246,14.094l23.115,23.352a8.72,8.72,0,0,0,.706.788,15.37,15.37,0,1,1-21.735,21.739,22.083,22.083,0,0,0-2.273-1.813c-.655-.5-.827-.846-.5-1.641s.826-1.537,1.158-2.347c.366-.9.663-1.837.951-2.772a36.129,36.129,0,0,0,1.3-15.415,35.048,35.048,0,0,0-29.871-30.164,35.738,35.738,0,0,0-8.581-32.246A35.151,35.151,0,0,0,214.756,382.2c-.351,0-.7,0-1.057,0a35.068,35.068,0,0,0-34.713-36.12,36.046,36.046,0,0,0-8.55.908,35.283,35.283,0,0,0-58.549-20.967L73.154,273.827l92.662-112.888,29.532,8.078-38.569,68.058a35.415,35.415,0,0,0,13.353,48.265c.515.292,1.033.569,1.559.834l.121.059a35.785,35.785,0,0,0,4.25,1.782A35.409,35.409,0,0,0,218.4,271.991l25.064-44.23,44.752,3.174L407.383,350.1A15.4,15.4,0,0,1,407.379,371.839Zm4.152-45.93L299.738,214.12c-.211-.214-.433-.417-.663-.608a10.025,10.025,0,0,0-5.712-2.3l-54.8-3.887a10.186,10.186,0,0,0-9.427,5.056l-28.179,49.731a15.37,15.37,0,1,1-26.744-15.158l37.617-66.389,15.244-4.386c.1-.032.2-.071.3-.1l56.893-16.429h68.74L438.829,268.74Zm40.424-72.9L372.6,152.073l40.5-25.758,74.156,96.324Z" />
                <path id="Path_5" data-name="Path 5" d="M309.578,120.795a10,10,0,0,0,7.088-2.936L385.11,49.415a10.021,10.021,0,0,0-14.172-14.172l-68.444,68.445a10.021,10.021,0,0,0,7.084,17.107Z" />
                <path id="Path_6" data-name="Path 6" d="M194.335,117.859a10.02,10.02,0,0,0,14.171-14.171L140.062,35.243A10.021,10.021,0,0,0,125.89,49.415Z" />
                <path id="Path_7" data-name="Path 7" d="M255.5,120.795a10.022,10.022,0,0,0,10.02-10.02V54.132a10.019,10.019,0,0,0-20.039,0v56.643A10.021,10.021,0,0,0,255.5,120.795Z" />
                <path id="Path_8" data-name="Path 8" d="M246.253,17.817A10.013,10.013,0,1,0,261.6,6.035a10.014,10.014,0,0,0-15.344,11.782Z" />
              </g>
            </svg>
            <h3>Make an impact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet ducimus beatae a omnis! Assumenda dolorum, consequatur vitae dolorem quis neque ducimus voluptas? Facere quaerat eligendi adipisci veniam veritatis. Dolore.</p>
          </div>
          <div className="home__column">
            <svg id="Group_5" data-name="Group 5" xmlns="http://www.w3.org/2000/svg" width="511.999" height="511.999" viewBox="0 0 511.999 511.999">
              <g id="Group_2" data-name="Group 2">
                <g id="Group_1" data-name="Group 1">
                  <path id="Path_1" data-name="Path 1" d="M502.56,202.731l-52.853-5.867a200.684,200.684,0,0,0-14.933-36l33.216-41.515a10.666,10.666,0,0,0-.789-14.2L406.849,44.864a10.666,10.666,0,0,0-14.2-.789l-41.516,33.2a200.611,200.611,0,0,0-36-14.933L309.269,9.494A10.666,10.666,0,0,0,298.667,0H213.334a10.667,10.667,0,0,0-10.6,9.493l-5.867,52.8a200.685,200.685,0,0,0-36,14.933L119.349,44.01a10.666,10.666,0,0,0-14.2.789L44.8,105.152a10.666,10.666,0,0,0-.779,14.2L77.28,160.864a200.611,200.611,0,0,0-14.933,36L9.494,202.731A10.666,10.666,0,0,0,0,213.333v85.333a10.667,10.667,0,0,0,9.493,10.6l52.8,5.867a200.684,200.684,0,0,0,14.933,36L44.01,392.651a10.666,10.666,0,0,0,.789,14.2L105.151,467.2a10.665,10.665,0,0,0,14.2.725l41.515-33.2a200.613,200.613,0,0,0,36,14.933l5.867,52.853a10.666,10.666,0,0,0,10.6,9.493h85.333a10.668,10.668,0,0,0,10.6-9.44l5.867-52.853a200.683,200.683,0,0,0,36-14.933l41.515,33.216a10.666,10.666,0,0,0,14.2-.789l60.288-60.352a10.666,10.666,0,0,0,.789-14.2l-33.2-41.515a200.612,200.612,0,0,0,14.933-36l52.853-5.867a10.666,10.666,0,0,0,9.493-10.6V213.333A10.665,10.665,0,0,0,502.56,202.731ZM490.669,289.12h0l-50.421,5.611a10.667,10.667,0,0,0-9.131,7.861A180.254,180.254,0,0,1,412.8,346.859a10.667,10.667,0,0,0,.9,12.021l31.712,39.637-46.837,46.837-39.637-31.712a10.667,10.667,0,0,0-12.021-.9,180.293,180.293,0,0,1-44.267,18.315,10.666,10.666,0,0,0-7.861,9.131l-5.611,50.475h-66.24l-5.664-50.475a10.667,10.667,0,0,0-7.861-9.131,180.254,180.254,0,0,1-44.267-18.315,10.667,10.667,0,0,0-12.021.9l-39.637,31.712L66.647,398.517l31.712-39.584a10.667,10.667,0,0,0,.9-12.021A180.292,180.292,0,0,1,80.94,302.645a10.666,10.666,0,0,0-9.131-7.861l-50.475-5.611v-66.24l50.475-5.664a10.667,10.667,0,0,0,9.131-7.861,180.253,180.253,0,0,1,18.315-44.267,10.667,10.667,0,0,0-.9-12.021L66.647,113.483l46.837-46.837,39.691,31.712a10.667,10.667,0,0,0,12.021.9,180.292,180.292,0,0,1,44.267-18.315,10.666,10.666,0,0,0,7.861-9.131l5.611-50.475h66.187l5.611,50.475a10.667,10.667,0,0,0,7.861,9.131,180.253,180.253,0,0,1,44.267,18.315,10.667,10.667,0,0,0,12.021-.9l39.637-31.712,46.837,46.891-31.712,39.637a10.667,10.667,0,0,0-.9,12.021,180.29,180.29,0,0,1,18.315,44.267,10.666,10.666,0,0,0,9.131,7.861l50.475,5.611Z" />
                </g>
              </g>
              <g id="Group_4" data-name="Group 4">
                <g id="Group_3" data-name="Group 3">
                  <path id="Path_2" data-name="Path 2" d="M386.294,183.083a149.332,149.332,0,1,0-260.64,145.834,10.667,10.667,0,0,0,16.843,2.336l69.685-69.685L236.8,294.4a10.668,10.668,0,0,0,16.075,1.141L320,228.416v38.251h21.333v-64h0A10.667,10.667,0,0,0,330.667,192h-64v21.333h38.251l-58.432,58.432-24.619-32.832a10.667,10.667,0,0,0-7.776-4.267,10.86,10.86,0,0,0-8.3,3.125L137.973,305.6a127.694,127.694,0,1,1,203.361,45.387V288H320v78.569a127.186,127.186,0,0,1-21.333,9.891V309.333H277.334v72.7A128.473,128.473,0,0,1,256,383.869V341.333H234.668v40.8a127.043,127.043,0,0,1-21.333-5.485V320H192v46.834a128.73,128.73,0,0,1-17.227-11.911L161.216,371.4a149.325,149.325,0,0,0,225.078-188.32Z" />
                </g>
              </g>
            </svg>
            <h3>Maximize efficiency</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo impedit suscipit cumque accusantium tenetur, quo ratione debitis veritatis magni, hic at quaerat! Praesentium consectetur similique nobis recusandae non reiciendis?</p>
          </div>
        </div>
      </section>

      <section className="home__quote">
        <h3>Why Our Busienss?</h3>
        <p><span>&#8221; </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni, tenetur molestias nostrum sint accusantium dolores mollitia ipsum delectus ut. Beatae labore quis perferendis asperiores rem autem sequi velit. Laboriosam.<span> &#8221;</span></p>
        <div className="home__quoteAuthor">
          <h4>??? Founder John Smith</h4>
          <p>On the success of the company</p>
        </div>
        <div className="home__quoteLink">
          <Link to="/ourImpact">Learn more</Link>
        </div>
      </section>

      <section className="home__callToAction">
        <div className="home__callToActionOverlay"></div>
        <div className="home__callToActionTextContainer">
          <div className="home__callToActionText">
            <h3>How can I <br />make a difference?</h3>
            <p>Partner with our business or make a donation.</p>
            <Link to="/#">Become a member and get started</Link>
            <Link to="/about">Find out more about who we are</Link>
          </div>
        </div>
      </section>

      <ContactPageBottom />
    </main>
  )
}

export default Home;
