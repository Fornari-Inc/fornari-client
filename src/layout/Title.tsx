
import profilePicture from '../assets/robertfari.jpeg';

function Title() {
  return (
    <section id="title" className="title-section">
      <img src={profilePicture} alt="Placeholder" className="profile-image"/>
      <h1>Robert Fornari</h1>
      <p>I’m an early Marketing/Advertising professional with both client-side and agency experiences.</p>
    </section>
  );
}

export default Title;
