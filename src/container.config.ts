import 'reflect-metadata';
import { container } from 'inversify-props';

import { ILogHelper, LogHelper } from '__business/helpers/LogHelper';

export default function buildContainer(): void {
    container.addTransient<ILogHelper>(LogHelper);
}