define(
  (require, exports) => {
    const apiPaths = {
      root: '/iranalysis/',
      analysis: id => `/iranalysis${typeof id !== 'undefined' ? `/${id}` : ''}`,
      createAnalysis: () => '/iranalysis/0',
      downloadShiny: (id, sourceKey) => `shiny/download/incidence/${id}/${sourceKey}`,
      publishShiny: (id, sourceKey) => `shiny/publish/incidence/${id}/${sourceKey}`,
    };

    const status = {
        PENDING: 'PENDING',
        RUNNING: 'RUNNING',
        COMPLETE: 'COMPLETE',
    };

    const tabs = {
      DEFINITION: 'definition',
      CONCEPT_SETS: 'conceptsets',
      GENERATION: 'generation',
      UTILITIES: 'utilities',
      VERSIONS: 'versions',
      WARNINGS: 'warnings',
    };

    function isInProgress(currentStatus) {
        return [status.PENDING, status.RUNNING].includes(currentStatus);
    }

    return {
      apiPaths,
      status,
      isInProgress,
      tabs,
    };
  }
);