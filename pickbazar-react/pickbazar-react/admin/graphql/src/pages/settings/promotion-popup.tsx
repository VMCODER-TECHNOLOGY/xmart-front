import AdminLayout from '@/components/layouts/admin';
import PromoPopUpSettingsForm from '@/components/settings/promo-popup';
import SettingsPageHeader from '@/components/settings/settings-page-header';
import ErrorMessage from '@/components/ui/error-message';
import Loader from '@/components/ui/loader/loader';
import { useSettingsQuery } from '@/graphql/settings.graphql';
import { adminOnly } from '@/utils/auth-utils';
import { Settings } from '__generated__/__types__';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function PromotionPopup() {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const { data, loading, error } = useSettingsQuery({
    variables: {
      language: locale,
    },
  });
  if (loading) return <Loader text={t('common:text-loading')} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <SettingsPageHeader pageTitle="form:text-popup-settings" />
      <PromoPopUpSettingsForm settings={data?.settings as Settings} />
    </>
  );
}
PromotionPopup.authenticate = {
  permissions: adminOnly,
};
PromotionPopup.Layout = AdminLayout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['form', 'common'])),
  },
});
