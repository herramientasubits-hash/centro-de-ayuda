/**
 * Ayudas para navegar producción con la sesión guardada.
 *
 * Una sesión nueva arranca en «Todas las sucursales» y la app pide elegir una
 * («Por favor seleccione una sucursal para poder continuar»). Las capturas se
 * toman siempre en la misma sucursal, la de `HELP_BRANCH` (por defecto la
 * cuenta de prueba principal), para que los datos sean coherentes.
 */
export const BRANCH = process.env.HELP_BRANCH ?? "mugen barber 2";

export async function chooseBranch(page, branch = BRANCH) {
  const chooser = page.getByText("Por favor seleccione una sucursal");
  if (!(await chooser.isVisible().catch(() => false))) return false;
  // El mismo nombre está oculto en el desplegable de la cabecera: solo cuenta el visible (el del modal).
  await page.getByText(branch, { exact: true }).locator("visible=true").first().click();
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1200);
  return true;
}
