import { FieldConfig } from '../entity-form/models/field-config.interface';

export interface DialogFormConfiguration {
  title: string,
  fieldConfig: Array<FieldConfig>,
  method_rest?: string,
  method_ws?: string,
  saveButtonText?: string,
  cancelButtonText?: string,
  detachButtonText?: string,
  getKeyButtonText?: string
}