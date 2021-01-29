export const onOpen = () => {
  const menu = SlidesApp.getUi()
    .createMenu(' 🍊🍊 Tangerine 🍊🍊') // edit me!
    .addItem('Sheet Editor', 'openDialog')
    .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
    .addItem('About me', 'openAboutSidebar');

  SlidesApp.getUi().createAddonMenu()
    .addItem('Open Tangerine', 'openAboutSidebar')
    .addToUi();


  menu.addToUi();
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  SlidesApp.getUi().showModalDialog(html, 'Lesson Builder');
};

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600);
  SlidesApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SlidesApp.getUi().showSidebar(html);
};

