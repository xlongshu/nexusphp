<?php

namespace App\Policies;

use App\Models\Codec;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CodecPolicy extends BasePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $this->can($user);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Codec  $codec
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Codec $codec)
    {
        return $this->can($user);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $this->can($user);
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Codec  $codec
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Codec $codec)
    {
        return $this->can($user);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Codec  $codec
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Codec $codec)
    {
        return $this->can($user);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Codec  $codec
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Codec $codec)
    {

    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Codec  $codec
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Codec $codec)
    {
        //
    }

    private function can(User $user)
    {
        if ($user->class >= User::CLASS_SYSOP) {
            return true;
        }
        return false;
    }
}
