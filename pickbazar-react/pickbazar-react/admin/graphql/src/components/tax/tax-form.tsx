import Input from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import {
  useCreateTaxClassMutation,
  useUpdateTaxClassMutation,
} from '@/graphql/tax.graphql';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import { getErrorMessage } from '@/utils/form-error';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { taxValidationSchema } from './tax-validation-schema';
import { Tax } from '__generated__/__types__';
import { Routes } from '@/config/routes';
import StickyFooterPanel from '../ui/sticky-footer-panel';

const defaultValues = {
  name: '',
  rate: 0,
  country: '',
  state: '',
  zip: '',
  city: '',
};

type IProps = {
  initialValues?: Tax | null;
};
export default function CreateOrUpdateTaxForm({ initialValues }: IProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Tax>({
    shouldUnregister: true,
    //@ts-ignore
    resolver: yupResolver(taxValidationSchema),
    defaultValues: initialValues ?? defaultValues,
  });
  const [createTaxClass, { loading: creating }] = useCreateTaxClassMutation({
    onCompleted: () => {
      toast.success(t('common:successfully-created'));
    },
  });
  const [updateTaxClass, { loading: updating }] = useUpdateTaxClassMutation({
    onCompleted: () => {
      toast.success(t('common:successfully-updated'));
    },
  });
  const onSubmit = async (values: Tax) => {
    try {
      if (initialValues) {
        await updateTaxClass({
          variables: {
            input: {
              ...values,
              id: initialValues.id!,
            },
          },
        });
      } else {
        await createTaxClass({
          variables: {
            input: {
              ...values,
            },
          },
        });
        router.push(Routes.tax.list);
      }
    } catch (error) {
      getErrorMessage(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title={t('form:form-title-information')}
          details={`${
            initialValues
              ? t('form:item-description-update')
              : t('form:item-description-add')
          } ${t('form:tax-form-info-help-text')}`}
          className="w-full px-0 sm:pe-4 md:pe-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={t('form:input-label-name')}
            {...register('name')}
            error={t(errors.name?.message!)}
            variant="outline"
            required
            className="mb-5"
          />
          <Input
            label={t('form:input-label-rate')}
            required
            {...register('rate')}
            type="number"
            error={t(errors.rate?.message!)}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t('form:input-label-country')}
            {...register('country')}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t('form:input-label-city')}
            {...register('city')}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="State"
            {...register('state')}
            variant="outline"
            className="mb-5"
          />
          <Input
            label={t('form:input-label-zip')}
            {...register('zip')}
            variant="outline"
            className="mb-5"
          />
        </Card>
      </div>

      <StickyFooterPanel className="z-0">
        <div className="text-end">
          {initialValues && (
            <Button
              variant="outline"
              onClick={router.back}
              className="me-4 text-sm md:text-base"
              type="button"
            >
              {t('form:button-label-back')}
            </Button>
          )}

          <Button
            loading={creating || updating}
            disabled={creating || updating}
            className="text-sm md:text-base"
          >
            {initialValues
              ? t('form:button-label-update')
              : t('form:button-label-add')}{' '}
            {t('form:button-label-tax')}
          </Button>
        </div>
      </StickyFooterPanel>
    </form>
  );
}
