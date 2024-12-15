module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    indentation: 2,
    'color-hex-length': 'short',
    'selector-class-pattern': '^[a-z0-9\\-]+$'
  }
}
