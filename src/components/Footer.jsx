import EmailButton from "./buttons/EmailButton";
import GithubButton from "./buttons/GithubButton";
import LinkedinButton from "./buttons/LinkedinButton";
import WspButton from "./buttons/WspButton";

const Footer = () => {
  return (
    <div className="flex justify-end mt-32 mr-8 lg:mr-16 mb-8">
      <div className="flex gap-8">
      <LinkedinButton />
      <GithubButton />
      <EmailButton />
      <WspButton />
      </div>
    </div>
  );
};

export default Footer;
