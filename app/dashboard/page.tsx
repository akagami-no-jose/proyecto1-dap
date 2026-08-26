

    </div>
  );
}


function Activity({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <div className="flex gap-3">

      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />

      <div>

        <p className="text-sm text-slate-700">
          {text}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {time}
        </p>

      </div>

    </div>
  );
}