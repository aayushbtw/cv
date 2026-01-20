import { test } from "@playwright/test";

test("generate resume PDF", async ({ page }) => {
  // Navigate to your resume page
  await page.goto("/");

  // Wait for the page to be fully loaded
  await page.waitForLoadState("networkidle");

  // Generate PDF with A4 format and no margins
  await page.pdf({
    path: "public/resume.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "35px",
      right: "30px",
      bottom: "35px",
      left: "30px",
    },
  });

  console.log("PDF generated successfully: public/resume.pdf");
});
