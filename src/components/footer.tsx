import favicon from "../assets/favicon-32x32.png";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center pb-10">
      <div className="flex">
        <img src={favicon} alt="favicon" width={22} />
        <p>Gabriel Moura - Desenvolvedor FrontEnd</p>
      </div>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/gabriel-moura-b63382161/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Linkedin
        </a>

        <a
          href="https://github.com/gbmouraa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Github
        </a>
        <a
          href="https://gmouradev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Portfólio
        </a>
      </div>
    </footer>
  );
};
