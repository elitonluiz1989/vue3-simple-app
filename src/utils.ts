export function isUndefined(value: any): boolean {
  return value === undefined;
}

export function isNull(value: any): boolean {
  return value === null;
}

export function empty(value: any): boolean {
  let isEmpty = isUndefined(value) || isNull(value);

  if (!isEmpty) {
    if (value.length !== undefined) {
      isEmpty = value.length === 0;
    }

    if (value instanceof Object) {
      isEmpty = Object.keys(value).length === 0;
    }
  }

  return isEmpty;
}