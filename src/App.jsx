import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import SingleProduct from "./pages/SingleProduct";
import ProductDetailPage from "./pages/SingleProduct";
import TermsAndConditions from "./pages/TermsAndConditions";
import { useEffect } from "react";
import MangrishPrincePdf from "./pages/MangrishPrincePdf";

const routes = (
  // <Suspense fallback={<p></p>}>
  //   <Router>
  //     <ScrollToTop>
  //       <Routes>
  //         <Route path="/" element={<LandingPage />} />
  //         <Route path="/terms-conditions" element={<TermsAndConditions />} />
  //         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  //         <Route path="/addBusiness" element={<BusinessOnboarding />} />
  //         <Route path="/addBusinessDetail" element={<Dashboard />} />
  //         <Route path="/:businessName/editProduct" element={<Catalog />} />
  //         <Route path="/:businessName/addProduct" element={<AddProduct />} />
  //         <Route path="/:businessName/copyProduct" element={<Catalog />} />

  //         {/* <Route path="/:businessName/catalog" element={<ProductList />} /> */}
  //         <Route
  //           path="/:businessName/catalog"
  //           element={<ProductCatalog status="active" />}
  //         />
  //         <Route
  //           path="/:businessName/branchCatalogPush"
  //           element={<BranchCatalogPush />}
  //         />
  //         <Route
  //           path="/:businessName/branchCatalog"
  //           element={<SubBranchCalalog />}
  //         />
  //         {/* <Route
  //           path="/:businessName/catalog"
  //           element={<ActiveProductList status="active" />}
  //         /> */}
  //         {/* <Route
  //           path="/:businessName/newCatalogPending"
  //           element={<ProductcatalogList />}
  //         />
  //         <Route
  //           path="/:businessName/newCatalogPendingExisting"
  //           element={<ProductcatalogList />}
  //         />
  //         <Route
  //           path="/:businessName/newCatalogRejected"
  //           element={<ProductcatalogList />}
  //         />
  //         <Route
  //           path="/:businessName/newCatalogRejectedExisting"
  //           element={<ProductcatalogList />}
  //         /> */}
  //         <Route
  //           path="/:businessName/ONDCParameters"
  //           element={<AddONDCDetails />}
  //         />
  //         <Route
  //           path="/:businessName/ONDCParametersNew"
  //           element={<AddONDCDetailsNew />}
  //         />

  //         <Route
  //           path="/:businessName/catalogPending"
  //           element={<ProductcatalogList status="pending" />}
  //         />
  //         <Route
  //           path="/:businessName/catalogPendingExisting"
  //           element={<ProductcatalogList status="pendingExisting" />}
  //         />
  //         <Route
  //           path="/:businessName/catalogRejected"
  //           element={<ProductcatalogList status="rejected" />}
  //         />
  //         <Route
  //           path="/:businessName/catalogRejectedExisting"
  //           element={<ProductcatalogList status="rejectedExisting" />}
  //         />

  //         <Route
  //           path="/:businessName/viewProduct"
  //           element={<ProductPreview />}
  //         />
  //         <Route
  //           path="/:businessName/viewProductNew"
  //           element={<ProductPreviewNew />}
  //         />
  //         <Route
  //           path="/:businessName/viewProductVariant"
  //           element={<ViewProductVariant />}
  //         />
  //         <Route
  //           path="/addBusinessPreview"
  //           element={<BusinessDetailsPreview />}
  //         />
  //         <Route
  //           path="/addBusinessPending"
  //           element={<BusinessDetailsPreview />}
  //         />
  //         <Route
  //           path="/dashboardStartBusiness"
  //           element={<BusinessDashboardStart />}
  //         />
  //         <Route
  //           path="/:businessName/dashboard"
  //           element={<BusinessDashboard />}
  //         />
  //         <Route path="/businessListing" element={<ChooseBusiness />} />
  //         <Route path="/BusinessListingEmpty" element={<EmptyBusinessList />} />

  //         {/* <Route path="/:businessName/allStock" element={<AllStock />} /> */}
  //         {/* <Route path="/:businessName/lowStock" element={<LowStock />} /> */}
  //         {/* <Route path="/:businessName/priceUpdate" element={<PriceUpdate />} /> */}
  //         {/* <Route path="/:businessName/outOfStock" element={<OutOfStock />} /> */}

  //         <Route path="/:businessName/outOfStock" element={<OutOfStockTab />} />
  //         <Route path="/:businessName/allStock" element={<AllStockTab />} />
  //         <Route path="/:businessName/lowStock" element={<LowStockTab />} />
  //         <Route
  //           path="/:businessName/priceUpdate"
  //           element={<PriceUpdateTab />}
  //         />
  //         {/* <Route
  //           path="/:businessName/pausedInventory"
  //           element={<PausedInventory />}
  //         /> */}
  //         <Route
  //           path="/:businessName/pausedInventory"
  //           element={<NotSellingTab />}
  //         />

  //         {/* Add Ecommerce Info */}
  //         {/* <Route path="/addCommerceInfo" element={<AddCommerceInfo />} /> */}
  //         <Route
  //           path="/addCommerceInfo"
  //           element={<EditCommerceInfo type="Add" />}
  //         />
  //         <Route path="/editCommerceInfo" element={<EditCommerceInfo />} />

  //         {/* Add ONDC Controls Info */}
  //         <Route
  //           path="/:businessName/ONDCControls"
  //           element={<AddONDCControlsDetails />}
  //         />
  //         <Route
  //           path="/:businessName/editONDCControls"
  //           element={<EditONDCControlDetails />}
  //         />

  //         {/* Coupons and Discounts */}
  //         <Route
  //           path="/:businessName/couponsDiscount"
  //           element={<CouponsDiscount />}
  //         />
  //         {/* CashBack */}
  //         <Route path="/:businessName/cashBack" element={<CashBack />} />
  //         {/* Prefered Discounts */}
  //         <Route
  //           path="/:businessName/preferredDiscounts"
  //           element={<PreferredDiscounts />}
  //         />

  //         {/* Orders */}
  //         <Route path="/:businessName/orders" element={<Orders />} />
  //         <Route
  //           path="/:businessName/manageReturns"
  //           element={<ManageReturns />}
  //         />
  //         {/* IssueRaising */}
  //         <Route
  //           path="/:businessName/issueRaising"
  //           element={<IssueRaising />}
  //         />
  //         {/* Paycart Orders */}
  //         <Route
  //           path="/:businessName/easyCartOrders"
  //           element={<PaycartOrders />}
  //         />

  //         {/* Affiliate Marketing Dashboard */}
  //         <Route
  //           path="/:businessName/affiliateMarketing"
  //           element={<AffiliateMarketingDashboard />}
  //         />

  //         {/* Ecommerce Info Preview */}
  //         <Route
  //           path="/:businessName/warehouseDetail"
  //           element={<WarehouseDetail />}
  //         />

  //         <Route
  //           path="/:businessName/deliveryMethods"
  //           element={<LogisticsManagement />}
  //         />

  //         <Route path="/:businessName/bankInfo" element={<BankDetails />} />

  //         <Route
  //           path="/:businessName/discountDetails"
  //           element={<BusinessDiscounts />}
  //         />

  //         <Route
  //           path="/:businessName/otherDetails"
  //           element={<OtherDetails />}
  //         />

  //         <Route path="/:businessName/managers" element={<ManageDelegates />} />

  //         <Route path="/:businessName/crmAnalysis" element={<CRMAnalysis />} />
  //         {/* <Route path="/:businessName/crmAnalysis" element={<CRMMarketing />} /> */}

  //         <Route
  //           path="/:businessName/fintechB2BCS"
  //           element={<FinTechProgram />}
  //         />
  //         <Route
  //           path="/:businessName/subscriptions"
  //           element={<Subscriptions />}
  //         />
  //         <Route path="/:businessName/reports" element={<OrderReports />} />
  //         <Route
  //           path="/:businessName/orderReports"
  //           element={<OrderReports />}
  //         />
  //         <Route
  //           path="/:businessName/orderReportsSummary"
  //           element={<OrderReportsSummary />}
  //         />
  //         <Route
  //           path="/:businessName/catalogInventoryReport"
  //           element={<CatalogInventoryReport />}
  //         />

  //         <Route
  //           path="/:businessName/multiBranchOrderReportsSummary"
  //           element={<MultiBranchOrderReportsSummary />}
  //         />
  //         <Route
  //           path="/:businessName/multiBranchOrderReports"
  //           element={<MultiBranchOrderReports />}
  //         />

  //         <Route path="/:businessName/support" element={<Support />} />

  //         <Route
  //           path="/:businessName/issueRaisingDetail"
  //           element={<ViewIssueDetails />}
  //         />

  //         <Route path="/howToVideoGuides" element={<Guides />} />

  //         <Route
  //           path="/:businessName/websiteintegration"
  //           element={<WebsiteIntegration />}
  //         />

  //         <Route
  //           path="/:businessName/catalogBulkUpload"
  //           // element={<CatalogBulkUploadNew />}
  //           element={<CatalogBulkUpload />}
  //         />

  //         {/* <Route
  //           path="/:businessName/copyCatalogBulkUpload"
  //           element={<CatalogBulkUpload />}
  //         /> */}

  //         <Route path="/userAuth" element={<UserAuth />} />

  //         <Route
  //           path="/:businessName/igmIssuesItem"
  //           element={<CustomerGrievance status="open" />}
  //         />

  //         <Route
  //           path="/:businessName/igmIssuesFulfillment"
  //           element={
  //             <CustomerGrievanceFullfilment
  //               category="FULFILLMENT"
  //               status="open"
  //             />
  //           }
  //         />
  //         <Route
  //           path="/:businessName/addProductNew"
  //           element={<AddProductNew />}
  //         />
  //         <Route
  //           path="/:businessName/editProductNew"
  //           element={<EditProductNew />}
  //         />
  //         <Route
  //           path="/:businessName/copyProductNew"
  //           element={<EditProductNew />}
  //         />
  //         <Route
  //           path="/:businessName/mobileSideMenu"
  //           element={<BusinessMobileSideMenu />}
  //         />

  //         <Route
  //           path="/:businessName/ondcShareLink"
  //           element={<OndcStoreLinks />}
  //         />

  //         <Route
  //           path="/:businessName/directStoreLink"
  //           element={<DirectShareLink />}
  //         />

  //         <Route
  //           path="/:businessName/addProductVariance"
  //           element={<AddProductVariant />}
  //         />
  //         <Route
  //           path="/:businessName/editProductVariance"
  //           element={<EditProductVariant />}
  //         />

  //         <Route
  //           path="/:businessName/catalogControls"
  //           element={<CatalogControls />}
  //         />

  //         <Route
  //           path="/:businessName/editCatalogControls"
  //           element={<EditCatalogControls />}
  //         />

  //         <Route
  //           path="/:businessName/catalogSync"
  //           element={<SyncNewCatalog />}
  //         />

  //         {/* <Route
  //           path="/:businessName/syncNewCatalog"
  //           element={<SyncNewCatalog />}
  //         /> */}

  //         <Route
  //           path="/:businessName/copyProductVariance"
  //           element={<CopyVariantProduct />}
  //         />

  //         <Route
  //           path="/:businessName/orderReportDownload"
  //           element={<ReportsDownload />}
  //         />

  //         <Route
  //           path="/:businessName/inventoryBulkUpdate"
  //           element={<InventoryBulkUpdate />}
  //         />

  //         <Route
  //           path="/:businessName/multiBranchPriceAnalysis"
  //           element={<PriceAnalysis />}
  //         />

  //         <Route
  //           path="/:businessName/bulkONDCUpdate"
  //           element={<BulkONDCUpdate />}
  //         />

  //         <Route
  //           path="/:businessName/bulkONDCSpecUpdate"
  //           element={<BulkONDCSpecUpdate />}
  //         />

  //         <Route
  //           path="/:businessName/bulkONDCParamsUpdate"
  //           element={<BulkONDCParamsUpdate />}
  //         />

  //         <Route
  //           path="/:businessName/multiBranchInventoryAnalysis"
  //           element={<InventoryAnalysis />}
  //         />

  //         {/* URL to Base64 Testing */}
  //         {/* <Route path="/urlToBase64Test" element={<URLtoBase64Test />} /> */}
  //       </Routes>
  //     </ScrollToTop>
  //   </Router>
  // </Suspense>
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/single-product" element={<ProductDetailPage />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route
          path="/mangrish-prince-catalog.pdf"
          element={<MangrishPrincePdf />}
        />
      </Routes>
    </Router>
  </div>
);

function App() {
  useEffect(() => {
    if (
      window.location.hostname !== "mangrishprince.com" &&
      window.location.hostname !== "localhost"
    ) {
      const handleKeyDown = (e) => {
        // Disable shortcuts for DevTools (macOS and Windows)
        if (
          (e.metaKey &&
            e.altKey &&
            (e.key === "I" || e.key === "J" || e.key === "C")) || // macOS DevTools shortcuts
          (e.ctrlKey &&
            e.shiftKey &&
            (e.key === "I" || e.key === "J" || e.key === "C")) || // Windows/Linux DevTools shortcuts
          e.key === "F12" || // Universal F12 key
          (e.metaKey && e.key === "U") || // macOS View Source
          (e.ctrlKey && e.key === "U") // Windows/Linux View Source
        ) {
          e.preventDefault();
          alert("This action is disabled!");
        }
      };

      const handleContextMenu = (e) => {
        e.preventDefault(); // Disable right-click menu
      };

      // Add event listeners
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("contextmenu", handleContextMenu);

      // Cleanup event listeners on unmount
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, []);

  return <div className="main-wrapper">{routes}</div>;
}
export default App;
