module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"airbnb",
		"prettier"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"react-hooks",
		"jsx-a11y",
  	"import"
	],
	"rules": {
		'max-len': [
      'error',
      {
        code: 100,
      },
    ],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
		"indent": ["error", 2, {"ignoredNodes": ["JSXElement"]}],
    "react/jsx-indent": ["error", 2],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/no-access-state-in-setstate": "warn", // Reports when this.state is accessed within setState
		"react/display-name": "error", // Prevent missing displayName in a React component definition
		"react/prefer-stateless-function": "error", // stateless component
		"react/no-danger": "error", //Prevent usage of dangerous JSX props
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react/no-danger-with-children": "error", //Report when a DOM element is using both children and dangerouslySetInnerHTML
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
		"react/no-deprecated": "error", // Prevent usage of deprecated methods
		"react/no-multi-comp": "error", //Prevent multiple component definition per file,
		"react/no-this-in-sfc": "error", // Report "this" being used in stateless components
		"react/no-unsafe": "error", //Prevent usage of unsafe lifecycle methods
		"react/prefer-stateless-function": "error", //Enforce stateless components to be written as a pure function
		"react/prop-types": "error", //Prevent missing props validation in a React component definition,
		"react/require-default-props": "error", //Enforce a defaultProps definition for every prop that is not a required prop.
		"react/self-closing-comp": "error", //Prevent extra closing tags for components without children (fixable)
		"react/jsx-filename-extension": [1, { "extensions": [".js",".jsx"] }], // Restrict file extensions that may contain JSX (react/jsx-filename-extension)
		"react/jsx-key": "error", // Detect missing key prop (react/jsx-key)
		"import/no-unresolved": "off" // TODO temporary solution
	},
	"settings": {
		"react": {
			"pragma": "React",  // Pragma to use, default to "React"
			"version": "detect", // React version. "detect" automatically picks the version you have installed.
		},
  }
};