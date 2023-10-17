import UrlapModel from "../Model/UrlapModel.js";
import UrlapView from "../View/UrlapView.js";
class UrlapController {
  constructor() {
    const urlapModel = new UrlapModel();
    new UrlapView($(".urlap"), urlapModel.leiro);

    $(window).on("valid", (event) => {
      console.log(event.detail.urlapAdat)
    });
  }
}
export default UrlapController;
