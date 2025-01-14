import { transform, type Transform } from 'sucrase';
import type { Transformer } from './types';

const TRANSFORM_FOR_STRIP_FLOW: Transform[] = ['flow', 'imports', 'jsx'];

export const stripFlowWithSucrase: Transformer<void> = (code, context) => {
  return Promise.resolve(
    transform(code, {
      transforms: TRANSFORM_FOR_STRIP_FLOW,
      filePath: context.path,
    }).code,
  );
};
