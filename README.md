<h2>You can use it for further changes.</h2>

This is simple web component without shadow DOM based on Tailwind styles.

Initialization are located in the Magento_Theme dir:<br/>
<img width="261" alt="image" src="https://github.com/user-attachments/assets/46de82ac-4ec1-4282-a322-4a50209e0384">
<br/>
```<script type="module" defer src="<?= $block->getViewFileUrl('Magento_Theme::js/step_navigator.js'); ?>"></script>```<br/>
```<step-navigator></step-navigator>```

The main benefit is you can put this wherever you want independent on any uiComponent.
