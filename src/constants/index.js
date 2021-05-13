// Login Page
export const APP_INIT = "APP_INIT";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Register Page
export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// Stock Page
export const HTTP_STOCK_FETCHING = "HTTP_STOCK_FETCHING";
export const HTTP_STOCK_SUCCESS = "HTTP_STOCK_SUCCESS";
export const HTTP_STOCK_FAILED = "HTTP_STOCK_FAILED";
// Stock Edit Page
export const HTTP_STOCK_EDIT_FETCHING = "HTTP_STOCK_EDIT_FETCHING";
export const HTTP_STOCK_EDIT_SUCCESS = "HTTP_STOCK_EDIT_SUCCESS";
export const HTTP_STOCK_EDIT_FAILED = "HTTP_STOCK_EDIT_FAILED";
export const HTTP_STOCK_EDIT_INITIALED = "HTTP_STOCK_EDIT_INITIALED";

// News Page
export const HTTP_NEWS_FETCHING = "HTTP_NEWS_FETCHING";
export const HTTP_NEWS_SUCCESS = "HTTP_NEWS_SUCCESS";
export const HTTP_NEWS_FAILED = "HTTP_NEWS_FAILED";
// News Edit Page
export const HTTP_NEWS_EDIT_FETCHING = "HTTP_NEWS_EDIT_FETCHING";
export const HTTP_NEWS_EDIT_SUCCESS = "HTTP_NEWS_EDIT_SUCCESS";
export const HTTP_NEWS_EDIT_FAILED = "HTTP_NEWS_EDIT_FAILED";
export const HTTP_NEWS_EDIT_INITIALED = "HTTP_NEWS_EDIT_INITIALED";

// Evens Page
export const HTTP_EVENS_FETCHING = "HTTP_EVENS_FETCHING";
export const HTTP_EVENS_SUCCESS = "HTTP_EVENS_SUCCESS";
export const HTTP_EVENS_FAILED = "HTTP_EVENS_FAILED";
// Evens Edit Page
export const HTTP_EVENS_EDIT_FETCHING = "HTTP_EVENS_EDIT_FETCHING";
export const HTTP_EVENS_EDIT_SUCCESS = "HTTP_EVENS_EDIT_SUCCESS";
export const HTTP_EVENS_EDIT_FAILED = "HTTP_EVENS_EDIT_FAILED";
export const HTTP_EVENS_EDIT_INITIALED = "HTTP_EVENS_EDIT_INITIALED";

// Building Page
export const HTTP_BUILDING_FETCHING = "HTTP_BUILDING_FETCHING";
export const HTTP_BUILDING_SUCCESS = "HTTP_BUILDING_SUCCESS";
export const HTTP_BUILDING_FAILED = "HTTP_BUILDING_FAILED";
// Building Edit Page
export const HTTP_BUILDING_EDIT_FETCHING = "HTTP_BUILDING_EDIT_FETCHING";
export const HTTP_BUILDING_EDIT_SUCCESS = "HTTP_BUILDING_EDIT_SUCCESS";
export const HTTP_BUILDING_EDIT_FAILED = "HTTP_BUILDING_EDIT_FAILED";
export const HTTP_BUILDING_EDIT_INITIALED = "HTTP_BUILDING_EDIT_INITIALED";

// Class Page
export const HTTP_CLASS_FETCHING = "HTTP_CLASS_FETCHING";
export const HTTP_CLASS_SUCCESS = "HTTP_CLASS_SUCCESS";
export const HTTP_CLASS_FAILED = "HTTP_CLASS_FAILED";
// Class Edit Page
export const HTTP_CLASS_EDIT_FETCHING = "HTTP_CLASS_EDIT_FETCHING";
export const HTTP_CLASS_EDIT_SUCCESS = "HTTP_CLASS_EDIT_SUCCESS";
export const HTTP_CLASS_EDIT_FAILED = "HTTP_CLASS_EDIT_FAILED";
export const HTTP_CLASS_EDIT_INITIALED = "HTTP_CLASS_EDIT_INITIALED";

// Transaction Edit Page
export const HTTP_TRANSACTION_FETCHING = "HTTP_TRANSACTION_FETCHING";
export const HTTP_TRANSACTION_SUCCESS = "HTTP_TRANSACTION_SUCCESS";
export const HTTP_TRANSACTION_FAILED = "HTTP_TRANSACTION_FAILED";

// Shop Page
export const HTTP_SHOP_FETCHING = "HTTP_SHOP_FETCHING";
export const HTTP_SHOP_SUCCESS = "HTTP_SHOP_SUCCESS";
export const HTTP_SHOP_FAILED = "HTTP_SHOP_FAILED";

export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";

export const apiUrl = "http://rmutlreact-api.ml/api/v2";
export const imageUrl = "http://rmutlreact-api.ml";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";

export const server = {
  LOGIN_URL: `authen/login`,
  REGISTER_URL: `authen/register`,
  PRODUCT_URL: `stock/product`,
  TRANSACTION_URL: `transaction`,
  REPORT_URL: `stock/report`,
  LOGIN_PASSED: `yes`,
  NEWS_URL: `news/news`,
  EVENS_URL: `evens/evens`,
  BUILDING_URL: `building/building`,
  CLASS_URL: `class/classroom`,
};
