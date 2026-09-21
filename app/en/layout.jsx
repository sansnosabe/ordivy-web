import DocumentLanguage from "../DocumentLanguage";

export default function EnglishLayout({ children }) {
  return <div lang="en"><DocumentLanguage lang="en" />{children}</div>;
}
