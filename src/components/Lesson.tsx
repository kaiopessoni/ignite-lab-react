import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = ({
  title,
  slug,
  availableAt,
  type
}: LessonProps): JSX.Element => {
  const { slug: currentSlug } = useParams();
  const isActiveLesson = slug === currentSlug;
  const isLessonAvailable = isPast(availableAt);
  const availableDateFromatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBr
    }
  )

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFromatted}
      </span>
      <div
        className={`${isActiveLesson ? 'bg-green-500' : ''} rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors`}
      >
        <header className="flex items-center justify-between">
          { isLessonAvailable ? (
            <span className={`flex items-center gap-2 text-sm font-medium ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={`text-xs rounded px-2 py-1 text-white border font-bold ${isActiveLesson ? 'border-white' : 'border-green-300'}`}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={`${isActiveLesson ? 'text-white' : 'text-gray-200'} mt-5 block`}>
          {title}
        </strong>
      </div>
    </Link>
  )
}