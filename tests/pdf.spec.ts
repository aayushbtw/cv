import { test } from "@playwright/test";

test("Generate CV PDF", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.pdf({
    path: "public/cv.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "35px",
      right: "30px",
      bottom: "35px",
      left: "30px",
    },
  });

  console.log("CV PDF generated: public/cv.pdf");
});
