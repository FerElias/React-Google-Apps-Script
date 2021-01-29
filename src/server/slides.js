
const getSlides = () => SlidesApp.getActivePresentation().getSlides();



const getActiveSlideName = () => SlidesApp.getActive().getSlideName();

const presentation = () => SlidesApp.getActivePresentation().getSlides();




export const createShape = () => {
  const slide = SlidesApp.getActivePresentation().getSlides()[0];
  slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
}


export const insertChart = () => {

  const sheet = SpreadsheetApp.openById('19SczJHL8wPijZ6NvESg_51UIVnkK5BFdTHtNn-Uy9sw').getSheets()[0];
  const chart = sheet.getCharts()[0];


  const slide = SlidesApp.getActivePresentation().getSlides()[0];
  slide.insertSheetsChart(chart);
}

export const getSlidesData = () => {
  const activeSlideName = getActiveSlideName();
  return getSlides().map((slide, index) => {
    const name = slide.getName();
    return {
      name,
      index,
      isActive: name === activeSlideName,
    };
  });
};

export const newSlide = () => {
  Logger.log(getSlides())
}


export const addSlide = slideTitle => {
  SlidesApp.getActive().insertSlide(slideTitle);
  return getSlidesData();
};

export const deleteSlide = slideIndex => {
  const slides = getSlides();
  SlidesApp.getActive().deleteSlide(slides[slideIndex]);
  return getSlidesData();
};

export const setActiveSlide = slideName => {
  SlidesApp.getActive()
    .getSlideByName(slideName)
    .activate();
  return getSlidesData();
};
