const TYPE_REPLACEMENTS = {
  primary: 'Button.Type.ACCENT',
  secondary: 'Button.Type.ACCENT',
  link: 'Button.Type.ACCENT',
  danger: 'Button.Type.NEGATIVE',
  pay: 'Button.Type.POSITIVE',
};

const PRIORITY_ADDITIONS = {
  secondary: 'Button.Priority.SECONDARY',
  link: 'Button.Priority.TERTIARY',
  danger: 'Button.Priority.SECONDARY',
};

const transform = (file, api, options) => {
  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const log = (message, level = 0) => {
    if (options.verbose >= level) {
      api.report(message);
    }
  };

  const j = api.jscodeshift;
  const root = j(file.source);

  log('✨ All aboard the transformation train 🚂', 2);
  log(
    '✨ Upgrading instances of Button from @transferwise/components. Please refer to components/upgrades/2021-02-v34-35.js for details.',
    1,
  );
  log(`✨ Using the ${options.parser} parser.`, 2);

  const literalType = options.parser === 'tsx' ? 'StringLiteral' : 'Literal';

  // First, ensure they are importing Button from our package
  const buttonImports = root
    .find(j.ImportDeclaration, {
      source: {
        type: literalType,
        value: '@transferwise/components',
      },
    })
    .find(j.Identifier, {
      name: 'Button',
    });

  if (buttonImports.size() === 0) {
    return null;
  }

  log('✨ Found import of Button from @transferwise/components, continuing 🛤', 1);

  const buttons = root.findJSXElements('Button');

  log('✨ Adding priorities for literal types', 2);

  // Add in priorities for literal types such as <Button type="secondary"/> => <Button type="secondary" priority={Button.Priority.SECONDARY} />
  buttons
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'type',
      },
      value: {
        type: 'Literal',
      },
    })
    .replaceWith((nodePath) => {
      const priority = PRIORITY_ADDITIONS[nodePath.value.value.value]; // 😅

      if (!priority) {
        return nodePath.value;
      }

      return [
        nodePath.value,
        j.jsxAttribute(
          j.jsxIdentifier('priority'),
          j.jsxExpressionContainer(j.identifier(priority)),
        ),
      ];
    });

  log('✨ Adding priorities for expressive types', 2);

  // Add in priorities for expressive types such as <Button type={Button.Type.SECONDARY}/> => <Button type={Button.Type.SECONDARY} priority={Button.Priority.SECONDARY} />
  buttons
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'type',
      },
      value: {
        type: 'JSXExpressionContainer',
        expression: {
          type: 'MemberExpression',
          object: {
            type: 'MemberExpression',
            object: {
              name: 'Button',
              type: 'Identifier',
            },
            property: {
              name: 'Type',
              type: 'Identifier',
            },
          },
        },
      },
    })
    .replaceWith((nodePath) => {
      const type = nodePath.value.value.expression.property.name;

      const priority = PRIORITY_ADDITIONS[type.toLowerCase()];

      if (!priority) {
        return nodePath.value;
      }

      return [
        nodePath.value,
        j.jsxAttribute(
          j.jsxIdentifier('priority'),
          j.jsxExpressionContainer(j.identifier(priority)),
        ),
      ];
    });

  log('✨ Replacing deprecated literal types', 2);

  // Replace literal types such as <Button type="primary"/> => <Button type={Button.Type.ACCENT} />
  buttons
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'type',
      },
      value: {
        type: 'Literal',
      },
    })
    .find(j.Literal)
    .replaceWith((nodePath) => {
      const type = TYPE_REPLACEMENTS[nodePath.value.value];

      if (!type) {
        return nodePath.value;
      }

      return j.jsxExpressionContainer(j.identifier(type));
    });

  log('✨ Replacing deprecated expressive types', 2);

  // Replace expressive types such as <Button type={Button.Type.PRIMARY}/> => <Button type={Button.Type.ACCENT} />
  buttons
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'type',
      },
      value: {
        type: 'JSXExpressionContainer',
      },
    })
    .find(j.MemberExpression, {
      object: {
        type: 'MemberExpression',
        object: {
          name: 'Button',
          type: 'Identifier',
        },
        property: {
          name: 'Type',
          type: 'Identifier',
        },
      },
    })
    .replaceWith((node) => {
      const type = node.value.property.name.toLowerCase();

      if (!TYPE_REPLACEMENTS[type]) {
        return node.value;
      }
      return j.jsxIdentifier(TYPE_REPLACEMENTS[type]);
    });

  log('✨ Transformation complete, printing to source.', 1);

  return root.toSource(printOptions);
};

export default transform;
