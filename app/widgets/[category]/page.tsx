import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { categories, getCategory } from "@/config/widgets";
import { getWidgetsByNames } from "@/lib/utils";

import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import WidgetCard from "@/components/widget-card";
import WidgetLoader from "@/components/widget-loader-client";
import WidgetDetails from "@/components/widget-details";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const category = getCategory((await params).category);

  if (!category) return {};

  return {
    title: `${category.name} widgets ~ Wigggle UI`,
    description: `Ready to use ${category.name} widgets for your next web project.`,
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<CategoryPageFallback />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: PageProps) {
  const category = getCategory((await params).category);

  if (!category) {
    notFound();
  }

  const smWidgets = getWidgetsByNames(
    category.widgets.sm.map((item) => item.name),
  );
  const mdWidgets = getWidgetsByNames(
    category.widgets.md?.map((item) => item.name) ?? [],
  );
  const lgWidgets = getWidgetsByNames(
    category.widgets.lg?.map((item) => item.name) ?? [],
  );

  const getDescription = () => {
    return `A collection of ${category.name} widgets from Wigggle UI.`;
  };

  return (
    <>
      <PageHeader title={category.name}>{getDescription()}</PageHeader>
      <PageGrid title="sm">
        {smWidgets.map((widget) => (
          <WidgetCard key={widget.name} widget={widget}>
            <WidgetLoader widget={widget} />
            <WidgetDetails widget={widget} />
          </WidgetCard>
        ))}
      </PageGrid>
      {category.widgets.md && category.widgets.md?.length >= 1 && (
        <PageGrid title="md">
          {mdWidgets.map((widget) => (
            <WidgetCard key={widget.name} widget={widget}>
              <WidgetLoader widget={widget} />
              <WidgetDetails widget={widget} />
            </WidgetCard>
          ))}
        </PageGrid>
      )}
      {category.widgets.lg && category.widgets.lg?.length >= 1 && (
        <PageGrid title="lg">
          {lgWidgets.map((widget) => (
            <WidgetCard key={widget.name} widget={widget}>
              <WidgetLoader widget={widget} />
              <WidgetDetails widget={widget} />
            </WidgetCard>
          ))}
        </PageGrid>
      )}
    </>
  );
}

function CategoryPageFallback() {
  return (
    <div role="status" aria-label="Loading category widgets">
      <div aria-hidden="true" className="relative mb-16 space-y-3 text-center">
        <div className="bg-muted mx-auto h-12 max-w-sm animate-pulse rounded-md" />
        <div className="bg-muted mx-auto h-6 max-w-3xl animate-pulse rounded-md" />
      </div>
      <div
        aria-hidden="true"
        className="md:border-border relative z-10 my-6 space-y-8 overflow-hidden rounded-4xl p-3 sm:border-2"
      >
        <div className="bg-muted mx-auto h-10 max-w-xs animate-pulse rounded-full sm:mx-0" />
        <div className="-m-px grid grid-cols-12 gap-6 *:px-1 *:py-12 sm:*:px-8 xl:*:px-12">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <div className="bg-muted aspect-square animate-pulse rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
