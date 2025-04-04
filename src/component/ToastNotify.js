import { toast } from "react-toastify";

const notify = (message, type) => {
  switch (type) {
    case "Error":
      toast.error(message);

      break;
    case "Success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    default:
      toast.success(message);

      break;
  }
};
export default notify;
