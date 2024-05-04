  import React from 'react';

  export const Facebook = ({
    color = 'currentColor',
    fontColor = '#191919',
    width = '15px',
    height = '15px',
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
          fill={color}
        />
        <path
          d="M9.38516 7.79367H8.04688V12.6965H6.01927V7.79367H5.05493V6.07061H6.01927V4.9556C6.01927 4.15824 6.39803 2.90967 8.06493 2.90967L9.56685 2.91595V4.58847H8.47711C8.29836 4.58847 8.04702 4.67778 8.04702 5.05814V6.07221H9.56231L9.38516 7.79367Z"
          fill={fontColor}
        />
      </svg>
    );
  };

  export const Twitter = ({
    color = 'currentColor',
    width = '15px',
    height = '13px',
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 1.44305C14.4481 1.68781 13.855 1.85323 13.2325 1.92763C13.8679 1.54675 14.3558 0.943652 14.5856 0.225063C13.991 0.577691 13.3324 0.833809 12.6314 0.971853C12.07 0.373752 11.2702 0 10.3851 0C8.6855 0 7.30758 1.37787 7.30758 3.07736C7.30758 3.31856 7.33485 3.55344 7.3873 3.77867C4.82964 3.65034 2.56205 2.42516 1.04422 0.563316C0.779326 1.01783 0.627565 1.54647 0.627565 2.11045C0.627565 3.1781 1.17091 4.12005 1.99665 4.6719C1.49215 4.65593 1.01767 4.5175 0.60271 4.28701C0.602491 4.29985 0.602491 4.31274 0.602491 4.32569C0.602491 5.81675 1.66328 7.06057 3.07111 7.34325C2.81285 7.41359 2.54099 7.45117 2.26029 7.45117C2.062 7.45117 1.8692 7.43191 1.68133 7.39597C2.07292 8.61862 3.20943 9.50834 4.55607 9.53319C3.50285 10.3586 2.1759 10.8505 0.734116 10.8505C0.485735 10.8505 0.240755 10.836 0 10.8076C1.3619 11.6807 2.97953 12.1902 4.71744 12.1902C10.3779 12.1902 13.4733 7.50088 13.4733 3.43422C13.4733 3.30078 13.4703 3.16806 13.4644 3.0361C14.0656 2.60222 14.5874 2.06019 15 1.44305Z"
          fill={color}
        />
      </svg>
    );
  };

  export const Github = ({
    color = 'currentColor',
    width = '15px',
    height = '15px',
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.50006 0C3.35843 0 0 3.35781 0 7.50006C0 10.8138 2.149 13.6251 5.129 14.6168C5.50383 14.6863 5.64144 14.4541 5.64144 14.2561C5.64144 14.0772 5.63449 13.4864 5.63126 12.8597C3.54473 13.3134 3.10445 11.9748 3.10445 11.9748C2.76328 11.1079 2.2717 10.8774 2.2717 10.8774C1.59122 10.4119 2.323 10.4214 2.323 10.4214C3.07613 10.4744 3.4727 11.1943 3.4727 11.1943C4.14163 12.3409 5.22724 12.0094 5.65523 11.8178C5.72254 11.3331 5.91691 11.0022 6.1314 10.8149C4.46554 10.6253 2.71434 9.98216 2.71434 7.10834C2.71434 6.28951 3.00733 5.62045 3.4871 5.09522C3.40923 4.90631 3.15251 4.14349 3.55976 3.11041C3.55976 3.11041 4.18957 2.90884 5.62281 3.8792C6.22107 3.71302 6.86268 3.62968 7.50006 3.62683C8.13745 3.62968 8.77955 3.71302 9.37893 3.8792C10.8104 2.90884 11.4394 3.11041 11.4394 3.11041C11.8476 4.14349 11.5908 4.90631 11.5129 5.09522C11.9938 5.62045 12.2848 6.28951 12.2848 7.10834C12.2848 9.98899 10.5302 10.6233 8.86015 10.8089C9.12917 11.0417 9.36887 11.4981 9.36887 12.1978C9.36887 13.2014 9.36017 14.009 9.36017 14.2561C9.36017 14.4556 9.49518 14.6895 9.87535 14.6159C12.8537 13.623 15 10.8127 15 7.50006C15 3.35781 11.6421 0 7.50006 0ZM2.80902 10.684C2.7925 10.7213 2.73388 10.7324 2.68047 10.7068C2.62607 10.6824 2.59552 10.6316 2.61316 10.5942C2.6293 10.5558 2.68805 10.5451 2.74232 10.5709C2.79685 10.5953 2.8279 10.6466 2.80902 10.684ZM3.17794 11.0132C3.14217 11.0463 3.07224 11.0309 3.0248 10.9785C2.97574 10.9262 2.96655 10.8563 3.00282 10.8227C3.0397 10.7895 3.10752 10.805 3.1567 10.8573C3.20576 10.9102 3.21532 10.9796 3.17794 11.0132ZM3.43103 11.4344C3.38508 11.4663 3.30994 11.4363 3.26349 11.3696C3.21753 11.303 3.21753 11.223 3.26448 11.1909C3.31105 11.1589 3.38508 11.1877 3.43215 11.2539C3.47798 11.3217 3.47798 11.4017 3.43103 11.4344ZM3.85906 11.9221C3.81795 11.9675 3.73039 11.9553 3.66631 11.8934C3.60073 11.833 3.58248 11.7471 3.62371 11.7018C3.66532 11.6564 3.75337 11.6691 3.81795 11.7305C3.88303 11.7909 3.90291 11.8773 3.85906 11.9221ZM4.41226 12.0868C4.39412 12.1456 4.30979 12.1723 4.22484 12.1473C4.14002 12.1216 4.0845 12.0528 4.10164 11.9934C4.11927 11.9343 4.20398 11.9065 4.28955 11.9332C4.37425 11.9588 4.42989 12.0271 4.41226 12.0868ZM5.04181 12.1567C5.04392 12.2185 4.97189 12.2698 4.88272 12.2709C4.79304 12.2729 4.72051 12.2229 4.71952 12.162C4.71952 12.0995 4.78994 12.0487 4.87961 12.0472C4.96879 12.0455 5.04181 12.0952 5.04181 12.1567ZM5.66028 12.1329C5.67096 12.1933 5.60899 12.2553 5.52044 12.2718C5.43337 12.2877 5.35277 12.2504 5.34171 12.1906C5.33091 12.1287 5.394 12.0668 5.48094 12.0507C5.56962 12.0353 5.64898 12.0716 5.66028 12.1329Z"
          fill={color}
        />
      </svg>
    );
  };

  export const Dribbble = ({
    color = 'currentColor',
    fontColor = '#191919',
    width = '15px',
    height = '15px',
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.50024 0.498047C11.3674 0.498047 14.4963 3.62695 14.4963 7.48828C14.4963 11.3496 11.3674 14.4844 7.50024 14.4844C3.63306 14.4844 0.50415 11.3555 0.50415 7.49414C0.50415 3.63281 3.63306 0.498047 7.50024 0.498047Z"
          fill={color}
        />
        <path
          d="M7.5 14.9824C3.36328 14.9824 0 11.625 0 7.49414C0 3.35742 3.36328 0 7.5 0C11.6367 0 15 3.35742 15 7.48828C15 11.6191 11.6367 14.9824 7.5 14.9824ZM13.8223 8.51367C13.6055 8.44336 11.8418 7.92188 9.83203 8.23828C10.6699 10.5352 11.0098 12.4102 11.0742 12.7969C12.5156 11.8301 13.541 10.2949 13.8223 8.51367ZM10.002 13.3887C9.9082 12.8262 9.5332 10.8691 8.63672 8.53711C8.625 8.54297 8.60742 8.54883 8.5957 8.54883C4.98047 9.80859 3.68555 12.3105 3.56836 12.5449C4.65234 13.3887 6.01758 13.8926 7.5 13.8926C8.38477 13.8984 9.23438 13.7168 10.002 13.3887ZM2.74219 11.7773C2.88867 11.5312 4.64648 8.625 7.95117 7.55273C8.0332 7.52344 8.12109 7.5 8.20312 7.47656C8.04492 7.11328 7.86914 6.75 7.68164 6.39258C4.48242 7.34766 1.37695 7.30664 1.0957 7.30078C1.0957 7.36523 1.08984 7.42969 1.08984 7.49414C1.0957 9.14062 1.7168 10.6406 2.74219 11.7773ZM1.23047 6.1875C1.51758 6.19336 4.1543 6.20508 7.1543 5.4082C6.09375 3.52148 4.94531 1.93945 4.78125 1.71094C2.98242 2.55469 1.64648 4.20703 1.23047 6.1875ZM6 1.27734C6.17578 1.51172 7.3418 3.09375 8.39062 5.02148C10.6699 4.16602 11.6309 2.87695 11.748 2.71289C10.6172 1.71094 9.12891 1.10156 7.5 1.10156C6.98438 1.10156 6.48047 1.16602 6 1.27734ZM12.457 3.45117C12.3223 3.63281 11.25 5.00977 8.88281 5.97656C9.0293 6.28125 9.17578 6.5918 9.31055 6.90234C9.35742 7.01367 9.4043 7.125 9.45117 7.23047C11.584 6.96094 13.6992 7.39453 13.9102 7.43555C13.8926 5.92969 13.3535 4.54102 12.457 3.45117Z"
          fill={fontColor}
        />
      </svg>
    );
  };
