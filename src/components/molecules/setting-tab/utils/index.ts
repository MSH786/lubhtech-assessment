import {useTranslation} from "react-i18next";
export const settingTab = [
  {
    title: "Dark Theme",
    switch: true,
  },
  {
    title: "Logout",
    onClick: true,
  },
  {
    title: "Delete Account",
    onClick: true,
    color: "#EE4B2B",
  },
];

export const translatedSettingTab = () => {
  const {t} = useTranslation();

  return settingTab.map((item) => ({
    ...item,
    title: t(item.title.toLowerCase()),
  }));
};
