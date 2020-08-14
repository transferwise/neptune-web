function convertStepToLayout(step) {
  switch (step.type) {
    case 'final':
      return convertFinalStepToDynamicLayout(step);
    case 'decision':
      return convertDecisionStepToDynamicLayout(step);
    case 'form':
      return convertFormStepToDynamicLayout(step);
    default:
      throw new Error('invalid step type');
  }
}

function convertCommonComponents(step) {
  const layout = [];

  if (step.title) {
    layout.push(convertStepTitleToDynamicHeading(step.title));
  }
  if (step.image) {
    const image = convertStepImageToDynamicImage(step.image);
    layout.push(dynamicBox([image]));
  }
  if (step.description) {
    layout.push(convertStepDescriptionToDynamicParagraph(step.description));
  }

  return layout;
}

function convertFormStepToDynamicLayout(step) {
  let layout = convertCommonComponents(step);

  if (step.reviewFields) {
    layout.push(convertStepReviewToDynamicReview(step.reviewFields));
  }

  if (step.schemas) {
    layout = layout.concat(getSchemaLayout(step));
  }

  if (step.actions) {
    const actions = step.actions.map(convertStepActionToDynamicAction);
    layout.push(dynamicBox(actions, 'md'));
  }

  return layout;
}

function convertFinalStepToDynamicLayout(step) {
  const layout = convertCommonComponents(step);

  if (step.action) {
    const actions = [convertStepActionToDynamicAction(step.action)];
    layout.push(dynamicBox(actions, 'md'));
  }

  return layout;
}

function convertDecisionStepToDynamicLayout(step) {
  const layout = convertCommonComponents(step);

  if (step.options) {
    layout.push(convertStepDecisionToDynamicDecision(step.options));
  }

  return layout;
}

function dynamicBox(components, size) {
  return {
    type: 'box',
    width: size || 'sm',
    components,
  };
}

function convertStepTitleToDynamicHeading(title) {
  return {
    type: 'title',
    text: title,
    size: 'lg',
    margin: 'lg',
    align: 'center',
  };
}

function convertStepDescriptionToDynamicParagraph(description) {
  return {
    type: 'paragraph',
    text: description,
    align: 'center',
  };
}

function convertStepSchemaToDynamicForm(schema) {
  return {
    type: 'form',
    schema,
  };
}

function convertStepDecisionToDynamicDecision(options) {
  return {
    type: 'decision',
    options: options.map(convertStepDecisionOption),
  };
}

function convertStepDecisionOption(option) {
  return {
    text: option.title,
    description: option.description,
    action: {
      method: 'GET',
      url: option.url,
      disabled: option.disabled,
    },
  };
}

function convertStepImageToDynamicImage(url) {
  return {
    type: 'image',
    url,
    margin: 'lg',
  };
}

function convertStepActionToDynamicAction(action) {
  return {
    type: 'action',
    context: action.type,
    action: { ...action, type: undefined },
  };
}

function convertStepReviewToDynamicReview(reviewFields) {
  return {
    type: 'review',
    text: reviewFields.title,
    definitions: reviewFields.fields.map(convertReviewFieldToDefinition),
  };
}

function convertReviewFieldToDefinition(reviewField) {
  return {
    label: reviewField.title,
    value: reviewField.value,
  };
}

function getSchemaLayout(step) {
  const layout = [];

  if (step.schemas && step.schemas[0]) {
    const schema = step.schemas[0];
    const dynamicForm = convertStepSchemaToDynamicForm(schema);
    if (isWideForm(schema)) {
      layout.push(dynamicForm);
    } else {
      layout.push(dynamicBox([dynamicForm], 'md'));
    }
  }

  return layout;
}

function isWideForm() {
  // For the time being we won't support automatically widening forms
  // Unlike it V2, there is no way to easily iterate and identify narrow fields
  return false;
}

export { convertStepToLayout };
