export function resetCountsOnLoad() {
  try {
    if (!window.DISQUSWIDGETS) {
      console.log("No widgets yet");
      setTimeout(resetCountsOnLoad, 10);
      return;
    }
  } catch (e) {
    console.error(e);
    setTimeout(resetCountsOnLoad, 10);
    return;
  }
  DISQUSWIDGETS.getCount({ reset: true });
}
resetCountsOnLoad();
