import { useState, useEffect } from "react";
import { loadExternalScript } from "../../utils/global";

const SocialSection = () => {
  const [isGitHubWidgetLoaded, setIsGitHubWidgetLoaded] = useState(false);

  useEffect(() => {
    loadExternalScript("https://buttons.github.io/buttons.js", () => {
      setIsGitHubWidgetLoaded(true);
    });
  });

  return (
    <section id="rahuldkjain-social">
      <div id="github-social-container">
        {isGitHubWidgetLoaded ? (
          <a
            className="github-button"
            href="https://github.com/n0obxd"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @n0obxd on GitHub"
            target="_blank"
          >
            GitHub
          </a>
        ) : (
          <a
            href="https://github.com/n0obxd"
            aria-label="Follow @n0obxd on GitHub"
            target="_blank"
          >
            GitHub @n0obxd
          </a>
        )}
      </div>
    </section>
  );
};
export default SocialSection;
