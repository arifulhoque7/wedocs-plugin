/**
 * Tailwind config for the block stylesheets that use Tailwind directives
 * (Breadcrumb, Sidebar, DocNavigation, QuickSearch).
 *
 * Same scoping, dark-mode gate and preflight isolation as tailwind.config.js.
 * Two things differ, and both exist to keep a block stylesheet the size of the
 * block instead of the size of the admin app:
 *
 * - `content` scans the block sources and the front-end templates only, not
 *   the whole `src/` tree, so the emitted utilities are the ones the blocks
 *   actually use (the admin app has its own stylesheet).
 * - daisyUI is left out. No block markup, front-end or editor, uses a daisyUI
 *   component or theme colour, but the plugin still emitted every component
 *   plus 29 theme variable sets into each of the four stylesheets.
 *
 * Each of the four stylesheets opts in with
 * `@config "../../../tailwind.blocks.config.js";` on its first line.
 */
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';

const rootClass = '.wedocs-document';

module.exports = {
  important: rootClass,
  darkMode: 'class',
  content: [
    './src/blocks/**/*.{js,jsx,php,html}',
    './templates/block-templates/**/*.html',
    './templates/*.php',
    './templates/modals/**/*.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles( {
      isolationStrategy: isolateInsideOfContainer( rootClass, {} ),
    } ),
    require( '@tailwindcss/forms' ),
  ],
};
