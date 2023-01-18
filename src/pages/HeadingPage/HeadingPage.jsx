import s from './HeadingPage.module.css';

function HeadingPage({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}

export default HeadingPage;

