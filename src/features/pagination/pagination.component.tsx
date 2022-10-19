import { FC } from 'react';
import PaginationInfo from 'features/pagination/pagination.types';
import {useLanguage} from '../../hook/useLanguage'

type PaginationProps = {
  p: PaginationInfo;
  onP: () => void;
  onN: () => void;
};

const Pagination: FC<PaginationProps> = ({
  p,
     onP,
  onN
}: PaginationProps) => {
    const onPrev = () => {
      onP();
    };

    const onNext = () => {
      onN();
    };

    const {translate} = useLanguage()
  return (
    <div className={'pagination'}>
        <button disabled={!p.prev} onClick={() => onPrev()} className={'button primary'}>
          {translate('navigation.previous')}
        </button>
      <button disabled={!p.next} onClick={() => onNext()} className={'button primary'}>
        {translate('navigation.next')}
      </button>
    </div>
  );
};

export default Pagination;
