import EmailButton from "./buttons/EmailButton";
import GithubButton from "./buttons/GithubButton";
import LinkedinButton from "./buttons/LinkedinButton";
import WspButton from "./buttons/WspButton";

const Footer = () => {
  return (
    <div className="flex justify-center mt-32 mb-8 lg:mt-0 lg:fixed lg:right-16 lg:top-96">
      <div className="flex lg:flex-col gap-12">
      <LinkedinButton />
      <GithubButton />
      <EmailButton />
      <WspButton />
      </div>
    </div>
  );
};

export default Footer;
