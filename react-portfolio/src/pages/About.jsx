import './About.css';

export default function Home() {
  return (
    <div className='custom-container-text'>
      <section className="first-part">
        <aside>
          <h2 id="section-one">About Me:</h2>
        </aside>
        <div className="info">
          <figure>
            <img src="./src/assets/images/Photo.JPG" alt="my picture" />
          </figure>
          <p>
            My name is <strong>Golnaz Berenjian</strong>. I am a people person. I love meeting new people and learning about their lives and their backgrounds. I can almost always find common ground with strangers, and I like making people feel comfortable in my presence. This skill is especially helpful when kicking off projects with new clients. In my previous job, my clients' customer satisfaction scores were 15% over the company average.
          </p>
        </div>
      </section>
    </div>
  );
}
